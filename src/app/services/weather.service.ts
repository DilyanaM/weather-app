import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { }

  getForecast(city: string): Observable<any> {
    const data = this.http.get(
      `${environment.API_URL}/forecast?q=${city}&units=metric&mode=json&APPID=${environment.APP_ID}`);
    return data;
  }

  getCurrentWeather(city: string): Observable<WeatherResponse> {
    const data = this.http.get(
      `${environment.API_URL}/weather?q=${city}&units=metric&APPID=${environment.APP_ID}`);
    return data as Observable<WeatherResponse>;
  }

  roundDegrees(temp: number): number {
    return Math.round(temp);
  }
}
