import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './app.state';
import { ErrorComponent } from './features/error/error.component';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { ProductsService } from './Services/products.service';
import { SharedModule } from './shared/shared.module';
import { ProductEffects } from './store/featured-products/products.effects';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatFormField,
    MatLabel,
    MatError,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ProductEffects]),
    FormsModule,
    SharedModule,
    MatSnackBarModule,
    LazyLoadImageModule,
  ],
  providers: [
    provideAnimationsAsync(),
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
