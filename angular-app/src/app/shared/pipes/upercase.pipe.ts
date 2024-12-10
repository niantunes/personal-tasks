import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upercase',
  standalone: true
})
export class PriorityPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value.toUpperCase();
  }

}
