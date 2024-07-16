import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { featuredProducts } from '../../models/FeaturedProducts';
import { cartAction } from '../../store/cart/cart.actions';
import { removefavourite } from '../../store/favourite/favourite.actions';
import { getFavourites } from '../../store/favourite/favourite.selector';
import { getIsLoggedIn } from '../../store/login/login.selector';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css',
})
export class FavouriteComponent {
  products$!: Observable<featuredProducts[]>;
  isLoggedin!: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(getFavourites);
  }
  addToCart(product: featuredProducts, quantity: number) {
    this.store.dispatch(cartAction({ product, quantity }));
  }
  removeFromFav(product: featuredProducts) {
    this.store.dispatch(removefavourite({ product }));
  }
  ngOnInit() {
    this.isLoggedin = this.store.select(getIsLoggedIn);
  }
}
