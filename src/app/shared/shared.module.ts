import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FeaturedproductsDirective } from '../features/featuredproducts/featuredproducts.directive';
import { FooterComponent } from '../features/footer/footer.component';
import { NavbarComponent } from '../features/navbar/navbar.component';
import { EuroCurrencyPipe } from '../pipes/currency.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    FeaturedproductsDirective,
    EuroCurrencyPipe,
  ],
  imports: [CommonModule, RouterModule, FormsModule, MatIconModule],
  exports: [
    FooterComponent,
    NavbarComponent,
    FeaturedproductsDirective,
    EuroCurrencyPipe,
  ],
})
export class SharedModule {}
