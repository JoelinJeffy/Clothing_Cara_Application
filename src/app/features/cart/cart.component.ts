import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { map, Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { featuredProducts } from '../../models/FeaturedProducts';
import { quantityAction, removeCart } from '../../store/cart/cart.actions';
import { getCartItems } from '../../store/cart/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  product$!: Observable<featuredProducts[] | null>;
  products!: featuredProducts[] | null;
  totalPrice!: number | undefined;
  totalQuantity!: number | undefined;
  constructor(private store: Store<AppState>, private router: Router) {
    // Getting cart items and calculating totalPrice and totalQuantity
    this.store
      .select(getCartItems)
      .subscribe((products) => (this.products = products));
    this.product$ = this.store.select(getCartItems);
    this.product$
      .pipe(
        map((products) => {
          return products?.map((product) => ({
            price: product.price * product.quantity,
            quantity: product.quantity,
          }));
        }),
        map((productInfo) => {
          const total = productInfo?.reduce(
            (totals, item) => {
              return {
                totalPrice: totals.totalPrice + item.price,
                totalQuantity: totals.totalQuantity + item.quantity,
              };
            },
            { totalPrice: 0, totalQuantity: 0 }
          );
          return total;
        })
      )
      .subscribe((totals) => {
        this.totalPrice = totals?.totalPrice;
        this.totalQuantity = totals?.totalQuantity;
      });
  }

  // removing items from cart
  removeCart(product: featuredProducts) {
    this.store.dispatch(removeCart({ product }));
  }

  // Increasing the quantity of product
  increment(product: featuredProducts) {
    let updatedQuantity = (product.quantity || 0) + 1;
    this.store.dispatch(
      quantityAction({ id: product.id, value: updatedQuantity })
    );
  }

  // Decreasing the quantity of product
  decrement(product: featuredProducts) {
    let updatedQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
    this.store.dispatch(
      quantityAction({ id: product.id, value: updatedQuantity })
    );
  }

  // Downlaoding the pdf
  downloadPDF() {
    const data = document.getElementById('pdfcart');
    if (data) {
      html2canvas(data).then((canvas) => {
        const imgWidth = 208;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('page.pdf');
      });
    }
  }

  // Downlaoding the cart items
  ngOnInit() {}
  async checkout() {
    const stripeid = this.products?.map((product) => {
      return {
        price: product.stripeid,
        quantity: product.quantity,
      };
    });
    const req = {
      line_items: stripeid,
      mode: 'payment',
      success_url: 'http://localhost:4200',
      cancel_url: 'http://localhost:4200',
    };
    await axios
      .post('http://localhost:4242/create-checkout-session/', req, {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => (window.location.href = response.data));
  }
}
