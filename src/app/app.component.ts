import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Weather App';
  darkModeActive: boolean;
  darkModeSubscription;

  // currentWeather;
  // forecast;

  constructor(public theme: ThemeService, public weather: WeatherService) {}

  ngOnInit() {
    this.darkModeSubscription =
      this.theme.darkMode.subscribe(value => this.darkModeActive = value);

    // this.getForecast('London');
  }

  // getCurrentWeather(city) {
  //   this.weather.getCurrentWeather(city)
  //     .subscribe(data => this.currentWeather = data);
  // }

  // getForecast(city) {
  //   this.weather.getForecast(city)
  //     .subscribe(data => this.forecast = data);
  // }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
  }
}
