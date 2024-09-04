import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from '../../shared/shared.module';
import { SingleproductComponent } from './singleproduct.component';

const routes: Routes = [{ path: '', component: SingleproductComponent }];

@NgModule({
  declarations: [SingleproductComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    FormsModule,
    MatSnackBarModule,
    HighchartsChartModule
  ],
  exports: [RouterModule],
})
export class SingleProductModule {}
