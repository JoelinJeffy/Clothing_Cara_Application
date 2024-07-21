import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './features/error/error.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./features/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./features/singleproduct/singleproduct.module').then(
        (m) => m.SingleProductModule
      ),
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'favourite',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/favourite/favourite.module').then(
        (m) => m.FavouriteModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contactus',
    loadChildren: () =>
      import('./features/contactus/contactus.module').then(
        (m) => m.ContactusModule
      ),
  },
  {
    path: 'booking',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/booking/booking.module').then((m) => m.BookingModule),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
