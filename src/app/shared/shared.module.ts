import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../features/navbar/navbar.component';
import { FooterComponent } from '../features/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeaturedproductsDirective } from '../features/featuredproducts/featuredproducts.directive';


@NgModule({
  declarations: [FooterComponent, NavbarComponent, FeaturedproductsDirective],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [FooterComponent, NavbarComponent, FeaturedproductsDirective],
})
export class SharedModule {}
