import { cartReducer } from './store/cart/cart.reducer';
import { CartState } from './store/cart/cart.state';
import { FavouriteComponent } from './features/favourite/favourite.component';
import { favouriteReducer } from './store/favourite/favourite.reducer';
import { favouriteState } from './store/favourite/favourite.state';
import { productsReducer } from './store/featured-products/products.reducer';
import { productsState } from './store/featured-products/products.state';
import { loginReducer } from './store/login/login.reducer';
import { LoginState } from './store/login/login.state';
import { signupReducer } from './store/signup/signup.reducer';
import { UserState } from './store/signup/signup.state';
import { ReviewState } from './store/reviews/review.state';
import { reviewReducer } from './store/reviews/review.reducer';
import { amenitiesState } from './store/amenities/amenities.state';
import { amenitiesReducer } from './store/amenities/amenities.reducer';

export interface AppState {
  cart: CartState;
  favourite: favouriteState;
  products: productsState;
  login: LoginState;
  signup: UserState;
  review: ReviewState;
  amenities:amenitiesState
}
export const appReducer = {
  cart: cartReducer,
  favourite: favouriteReducer,
  products: productsReducer,
  login: loginReducer,
  signup: signupReducer,
  review: reviewReducer,
  amenities:amenitiesReducer
};
