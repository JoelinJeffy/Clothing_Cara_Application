import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { cartAction } from '../../cart/state/cart.actions';
import { CartState } from '../../cart/state/cart.state';
import {
  favouriteAction,
  removefavourite,
} from '../../favourite/state/favourite.actions';

import { favouriteState } from '../../favourite/state/favourite.state';
import { getIsLoggedIn } from '../../login/state/login.selector';
import { LoginState } from '../../login/state/login.state';
import { featuredProducts } from '../../Models/FeaturedProducts';

import { loadProducts } from './state/products.action';
import { getFilteredProducts, getProducts } from './state/products.selector';
import { productsState } from './state/products.state';

@Component({
  selector: 'app-featuredproducts',
  templateUrl: './featuredproducts.component.html',
  styleUrl: './featuredproducts.component.css',
})
export class FeaturedproductsComponent {
  products$!: Observable<featuredProducts[]>;
  login!: boolean;
  isFav!: boolean;

  constructor(
    private store: Store<productsState>,
    private favstore: Store<favouriteState>,
    private route: Router,
    private cartStore: Store<CartState>,
    private loginStore: Store<LoginState>
  ) {
    this.products$ = this.store.select(getFilteredProducts).pipe(
      // tap((products) => console.log('Products from store:', products)),
      map((products) => products ?? [])
    );
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
    this.loginStore
      .select(getIsLoggedIn)
      .subscribe((data) => (this.login = data));
  }
  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
  toggleFav(product: featuredProducts) {
    if (this.login) {
      
        this.favstore.dispatch(favouriteAction({ product }));
      }
    else {
      alert('Login to continue');
    }
  }
  addToCart(product: featuredProducts, quantity: number) {
    if (this.login) {
      this.cartStore.dispatch(cartAction({ product, quantity }));
    } else {
      alert('Login To Continue');
      this.route.navigate(['/login']);
    }
  }
  
}
