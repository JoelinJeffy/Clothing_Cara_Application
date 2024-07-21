import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../../shared/shared.module';
import { AmenitiesComponent } from '../amenities/amenities.component';
import { FeaturedproductsComponent } from '../featuredproducts/featuredproducts.component';
import { HeroComponent } from '../hero/hero.component';
import { BannerDirective } from './banner.directive';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    FeaturedproductsComponent,
    HeroComponent,
    BannerDirective,
    AmenitiesComponent,
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
