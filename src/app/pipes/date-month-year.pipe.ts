import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthYear'
})
export class DateMonthYearPipe implements PipeTransform {

  transform(date: Date | string): string {
    date = new Date();
    const monthNumber: number = date.getMonth();
    const yearString: string = date.getFullYear().toString();
    let monthString: string;
    switch (monthNumber) {
      case 1:
        monthString = 'Styczeń';
        break;
      case 2:
        monthString = 'Luty';
        break;
      case 3:
        monthString = 'Marzec';
        break;
      case 4:
        monthString = 'Kwiecień';
        break;
      case 5:
        monthString = 'Maj';
        break;
      case 6:
        monthString = 'Czerwiec';
        break;
      case 7:
        monthString = 'Lipiec';
        break;
      case 8:
        monthString = 'Sierpień';
        break;
      case 9:
        monthString = 'Wrzesień';
        break;
      case 10:
        monthString = 'Październik';
        break;
      case 11:
        monthString = 'Listopad';
        break;
      case 12:
        monthString = 'Grudzień';
        break;
    }
    return monthString + ' ' + yearString;

  }

}
