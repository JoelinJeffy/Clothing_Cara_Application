import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { logoutAction } from '../store/login/login.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  display: boolean = false;
  constructor(private store:Store<AppState>,private router:Router) {
    this.displayChart();
  }

  logout() {
    this.store.dispatch(logoutAction());
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);

  }

  displayChart() {
    this.display = !this.display;
  }
}
