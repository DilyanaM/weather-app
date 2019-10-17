import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  formatDate(timestamp) {
    return moment.unix(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss (Z)");
  }
}
