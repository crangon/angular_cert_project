import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positiveSignum'
})
export class PositiveSignumPipe implements PipeTransform {

  transform(value: string | number | null, ...args: unknown[]): string {
    if (value) {
      let stringValue = value as string;
      if (stringValue && /^\d/.test(stringValue)) return '+' + stringValue;
      return stringValue;
    }
    return '';
  }

}
