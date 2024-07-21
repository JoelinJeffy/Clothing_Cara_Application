import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurocurrency',
})
export class EuroCurrencyPipe implements PipeTransform {
  transform(value: number | null | undefined): string | null {
    if (value === null || value === undefined) {
      return null;
    }

    return this.formatToEuro(value);
  }

  private formatToEuro(value: number): string {
    const valueStr = value.toFixed(2);

    return `€${valueStr}`;
  }
}
