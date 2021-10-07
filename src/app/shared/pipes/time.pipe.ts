import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: any): string {
    return `${Math.round(+value / 60 / 60 / 24)} days`;
  }
}
