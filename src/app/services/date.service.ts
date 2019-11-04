import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  // digitsRegex = /^[0-9]{2}?$/g;

  formatDate(timestamp: number) {
    return moment.unix(timestamp).format("dddd, MMMM Do YYYY, HH:mm:ss");
  }

  timezoneOffset(timezone: number) {
    // let offset;
    // if (timezone >= 0) {
    //   offset = timezone / 3600;
    // } else {
    //   offset = (timezone / 3600) * -1;
    // }
    if (timezone >= 0) {
      return `+${timezone / 3600}`;
    } else {
      return `${timezone / 3600}`;
    }
  }

}
