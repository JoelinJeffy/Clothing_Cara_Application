import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { BookingComponent } from './booking.component';

const routes: Routes = [{ path: '', component: BookingComponent }];

@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MatIcon],
  exports: [RouterModule],
})
export class BookingModule {}
