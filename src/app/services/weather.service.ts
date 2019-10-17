import { Injectable } from '@angular/core';
import { API_URL, APP_ID } from '../utils/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { }

  getForecast(city: string): Observable<any> {
    const data = this.http.get(
      `${API_URL}/forecast?q=${city}&mode=json&APPID=${APP_ID}`);
    return data;
  }

  getCurrentWeather(city: string): Observable<any> {
    const data = this.http.get(
      `${API_URL}/weather?q=${city}&APPID=${APP_ID}`);
    return data;
  }
}
