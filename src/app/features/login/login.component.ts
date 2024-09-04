import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { User } from '../../models/User';
import { getUser, loginAction } from '../../store/login/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = false;
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onLoginSubmit() {
    this.loading = true;
    let loginUser: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    let signupUsers: User[] = [];
    let retrievedData = localStorage.getItem('signupState');

    if (retrievedData) {
      try {
        signupUsers = JSON.parse(retrievedData).user || [];
      } catch {
        localStorage.removeItem('signupState');
      }
    }

    const foundUser = signupUsers.find(
      (user) => user.email === loginUser.email
    );

    if (foundUser) {
      const user = foundUser.email;
      if (foundUser.email === 'admin123@gmail.com') {
        localStorage.setItem('loggedInUser', JSON.stringify({ user }));
        this.store.dispatch(loginAction());
        this.store.dispatch(getUser({ user }));
        this.snackBar
          .open('You are logged in as Admin', 'Close', {
            duration: 1000,
          })
          .afterDismissed()
          .subscribe(() => {
            this.loading = false;
            this.router.navigate(['/admin']);
          });
      } else {
        if (foundUser.password === loginUser.password) {
          localStorage.setItem('loggedInUser', JSON.stringify({ user }));
          this.store.dispatch(loginAction());
          this.store.dispatch(getUser({ user }));
          this.snackBar
            .open('You are logged in', 'Close', {
              duration: 1000,
            })
            .afterDismissed()
            .subscribe(() => {
              this.loading = false;
              this.router.navigate(['/']);
            });
        } else {
          this.snackBar
            .open('Incorrect password. Please try again.', 'Close', {
              duration: 1000,
            })
            .afterDismissed()
            .subscribe(() => {
              this.loading = false;
              this.router.navigate(['/login']);
            });;
        }
      }
    } else {
      this.snackBar
        .open('User not found. Sign up to continue.', 'Close', {
          duration: 1000,
        })
        .afterDismissed()
        .subscribe(() => {
          this.loading = false;
          this.router.navigate(['/signup']);
        });;
    }

    this.loginForm.reset();
  }
}
