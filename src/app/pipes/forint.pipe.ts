import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forint',
})
export class ForintPipe implements PipeTransform {
  transform(value: number): string {
    const formatter = new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
    return formatter.format(value);
  }
}
