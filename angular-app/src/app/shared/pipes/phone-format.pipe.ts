import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})

export class PhoneFormatPipe implements PipeTransform {

  transform(value: string ): string {
    if (!value) return '';

    const phone = value.toString();

    if (phone.length == 11 || phone.length == 10) {
      const formattedPhone = `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`;
      return formattedPhone;
    } else {
      return phone;
    }
    
  }
}
