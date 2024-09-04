import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ChartsComponent } from './charts/charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SinglechartComponent } from './singlechart/singlechart.component';


const routes: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent, ChartsComponent, SinglechartComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    HighchartsChartModule,
  ],
  exports: [RouterModule],
})
export class AdminModule {}
