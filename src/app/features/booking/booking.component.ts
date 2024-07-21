import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { featuredProducts } from '../../models/FeaturedProducts';
import { getUser } from '../../store/login/login.selector';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s ease-out', style({ opacity: 1 }))]),
    ]),
  ],
})
export class BookingComponent {
  cartItems: featuredProducts[] = [];
  user: string = '';
  totalPrice: number = 0;
  totalQuantity: number = 0;
  date = Date.now();
  showConfetti = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(getUser).subscribe((user) => (this.user = user));

    let cartItems = sessionStorage.getItem('cartItem');
    if (cartItems) {
      try {
        this.cartItems = JSON.parse(cartItems);
      } catch {
        sessionStorage.removeItem('cartItems');
      }
    }
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    this.totalQuantity = this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    confetti();
    this.showConfetti = true;
    setTimeout(() => {
      this.showConfetti = false;
    }, 5000);
  }
}
