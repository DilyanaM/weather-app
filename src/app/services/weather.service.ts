import { Injectable } from '@angular/core';
import { API_URL, APP_ID } from '../utils/constants';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { }

  getForecast(city: string): Subject<any> {
    const dataSubject = new Subject();
    this.http.get(
      `${API_URL}/forecast?q=${city}&mode=json&APPID=${APP_ID}`)
        .subscribe((data) => {
          dataSubject.next(data);
        });
    return dataSubject;
  }

  getCurrentWeather(city: string): Subject<any> {
    const dataSubject = new Subject();
    this.http.get(
      `${API_URL}/weather?q=${city}&APPID=${APP_ID}`)
        .subscribe((data) => {
          dataSubject.next(data);
        });
    return dataSubject;
  }
}
