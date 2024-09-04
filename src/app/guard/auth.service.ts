import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { getIsLoggedIn, getUser } from '../store/login/login.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store<AppState>) { }
  isLoggedIn!: boolean;
  user!: string;


  getAuthIsLoggedIn() {
    this.store
      .select(getIsLoggedIn)
      .subscribe((data) => (this.isLoggedIn = data));
    return this.isLoggedIn;
  }

  getUser() {
    this.store.select(getUser).subscribe((user) => this.user = user)
    if (this.user === "admin123@gmail.com") {
    
      return true
    }
    else {
      
      return false
    }
  }
}