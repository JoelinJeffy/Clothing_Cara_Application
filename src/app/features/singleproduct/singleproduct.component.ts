import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProducts } from '../../store/featured-products/products.selector';
import { featuredProducts } from '../../models/FeaturedProducts';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { loadProducts } from '../../store/featured-products/products.action';
import { cartAction } from '../../store/cart/cart.actions';
import { getIsLoggedIn } from '../../store/login/login.selector';
import { AppState } from '../../app.state';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css',
})
export class SingleproductComponent {
  id!: number;
  product$!: Observable<featuredProducts | undefined>;
  value: number = 1;
  loggedIn!: boolean;
  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>,
    private route: Router,
    private snackBar: MatSnackBar
  ) {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    this.product$ = this.store.select(getProducts).pipe(
      map((products) => {
        if (!products) {
          return undefined;
        } else {
          return products.find((product) => product.id === this.id);
        }
      })
    );
  }

  addToCart(product: featuredProducts, quantity: number) {
    this.store
      .select(getIsLoggedIn)
      .subscribe((data) => (this.loggedIn = data));
    console.log(this.loggedIn);
    if (this.loggedIn) {
      console.log(this.loggedIn);
      this.store.dispatch(cartAction({ product, quantity }));
      this.snackBar.open('Product added to cart succesfully', 'Close', {
        duration: 3000,
      }).afterDismissed().subscribe(() => {
        this.route.navigate(['/cart']);
      });
    
    } else {
       this.snackBar.open('Login to continue', 'Close', {
        duration: 3000,
      }).afterDismissed().subscribe(() => {
        this.route.navigate(['/login']);
      });
    
    }
  }

  ngOnInit() {
    this.router.params.subscribe((data) => (this.id = data['id']));

    this.store.dispatch(loadProducts());
  }
}
