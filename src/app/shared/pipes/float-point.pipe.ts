import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floatPoint',
})
export class FloatPointPipe implements PipeTransform {
  transform(value: any): any {
    if (typeof value === 'string') {
      return value.replace(/[\s,%]/g, '');
    } else {
      return value;
    }
  }
}
