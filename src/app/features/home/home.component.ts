import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import emailjs from '@emailjs/browser'
import { getUser } from '../../store/login/login.selector';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user!: string;
  message!: string;
  loading = false;
  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>,
    private snackBar: MatSnackBar
  ) {}
  async send() {
    this.loading = true;
    emailjs.init('hRNZ6lKXhEqEFbYB4');
    try {
       await emailjs.send('service_adf7lql', 'template_ya104ok', {
      from_name: this.user,
      message: this.message,
      reply_to: 'cara',
    });
    this.snackBar.open('Review Sent.Thank you!', 'Close', {
      duration: 1000,
    });
    }
    catch(error) {
      console.error('Failed to send review:', error);
      this.snackBar.open('Failed to send review. Please try again.', 'Close', {
        duration: 1000,
      });
    }
    finally {
      this.loading = false;
    }
   
  }

  ngOnInit() {
    this.router.fragment.subscribe((shop) => this.JumpToSection(shop));
    this.store.select(getUser).subscribe((data) => (this.user = data));
  }
  JumpToSection(shop: string | null) {
    if (shop) {
      document
        .getElementById(shop)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
