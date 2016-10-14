import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decamel'
})
export class DecamelPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.constructor !== String) {
      return value;
    }
    value = value.split(/(?=[A-Z])/).join(' ');
    value = value[0].toUpperCase() + value.slice(1);
    return value;

  }

}