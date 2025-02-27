import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../home/footer/footer.component';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FeaturedproductsComponent } from './featuredproducts/featuredproducts.component';
import { HeroComponent } from './hero/hero.component';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent,FeaturedproductsComponent,HeroComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class HomeModule {}
