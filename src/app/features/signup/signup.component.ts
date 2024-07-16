import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { User } from '../../models/User';
import { signup } from '../../store/signup/signup.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  loginForm!: FormGroup;
  signupUsers: User[] = [];
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordsMatchValidator }
    );
  }
  passwordsMatchValidator: ValidatorFn = (
    form: AbstractControl
  ): { [key: string]: any } | null => {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  };
  onLoginSubmit() {
    let user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    if (!this.signupUsers) {
      this.signupUsers = [];
    }

    this.store.dispatch(signup({ user }));

    this.router.navigate(['/login']);
  }
}
