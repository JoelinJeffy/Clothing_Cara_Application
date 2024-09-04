import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class  AdminAuthGuard {
  constructor(private authService: AuthService, private router: Router) {}


  canActivate() {
      if (this.authService.getUser()) {
       
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
