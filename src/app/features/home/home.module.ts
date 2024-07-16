import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../../shared/shared.module';
import { FeaturedproductsComponent } from '../featuredproducts/featuredproducts.component';
import { HeroComponent } from '../hero/hero.component';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    FeaturedproductsComponent,
    HeroComponent,
   
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    LazyLoadImageModule,
  ],
  exports: [RouterModule],
})
export class HomeModule {}
