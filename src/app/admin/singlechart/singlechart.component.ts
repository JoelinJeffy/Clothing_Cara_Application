import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { featuredProducts } from '../../models/FeaturedProducts';
import { getFilteredProducts } from '../../store/featured-products/products.selector';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-singlechart',
  templateUrl: './singlechart.component.html',
  styleUrls: ['./singlechart.component.css'],
})
export class SinglechartComponent implements OnInit {
  products$!: Observable<featuredProducts[]>;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptionsArray: Highcharts.Options[] = [];
  products: featuredProducts[] = [];

  constructor(private store: Store<AppState>) {
    this.products$ = this.store
      .select(getFilteredProducts)
      .pipe(map((products) => products ?? []));
  }

  ngOnInit(): void {
    this.products$.subscribe((products) => {
      if (products.length > 0) {
        this.products = products;
        this.chartOptionsArray = products.map((product) =>
          this.getBarChartOptions(product.charts)
        );
      }
    });
  }

  getBarChartOptions(charts: any[]): Highcharts.Options {
    const yearData = charts.map((chart) => chart.year.toString());
    const quantityData = charts.map((chart) => chart.quantity);
    const colorData = charts.map((chart) => chart.colorcode);
   

    return {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Yearly Sales',
      },
      xAxis: {
        categories: yearData,
        title: {
          text: 'Year',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Quantity',
          align: 'high',
        },
        labels: {
          overflow: 'justify',
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          name: 'Sales',
          data: quantityData,
          colorByPoint: true,
          colors:colorData,
          type: 'bar',
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }
}
