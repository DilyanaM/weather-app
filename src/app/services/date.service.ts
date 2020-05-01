import { Injectable } from '@angular/core';
import * as moment from 'moment/moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  formatDate(timestamp: number) {
    return moment.unix(timestamp).utc().format('dddd, MMMM Do YYYY, HH:mm:ss');
  }

  timezoneOffset(timezone: number) {
    const offset = Math.abs(timezone / 3600);
    if (offset < 10) {
      return timezone >= 0 ? `+0${offset}:00` : `-0${offset}:00`;
    } else {
      return timezone >= 0 ? `+${offset}:00` : `-${offset}:00`;
    }
  }

}
