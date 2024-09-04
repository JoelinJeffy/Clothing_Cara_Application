import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export class ChartsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  @Input() displayChart!: boolean;

  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Monthly Sales',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Month',
        data: [10, 5, 15, 30, 30, 40, 45, 50, 55, 65, 50, 65],
      } as Highcharts.SeriesLineOptions,
    ],
  };

  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      plotShadow: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99line%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Product Categories',
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'T-shirt', y: 40, color: '#4caf50' },
          { name: 'Shirt', y: 30, color: '#2196f3' },
          { name: 'Trouser', y: 20, color: '#ff9800' },
          { name: 'Blazer', y: 10, color: '#f44336' },
        ],
      },
    ],
  };
}
