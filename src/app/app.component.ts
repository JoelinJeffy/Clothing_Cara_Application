import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { AppState } from './app.state';
import { getUser, loginAction } from './store/login/login.actions';
//  npm i @types/uuid

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularmainproject';
  public list: string[] = [];
  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser).user;
      this.store.dispatch(loginAction());
      this.store.dispatch(getUser({ user }));
    }

    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('uuid', this.generateUUID());
    }
  }
  constructor(
    private store: Store<AppState>,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}
  generateUUID() {
    return uuidv4();
  }
}
