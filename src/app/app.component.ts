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

  // currentWeatherSubscription;
  // forecastSubscription;

  constructor(public theme: ThemeService, public weather: WeatherService) {}

  ngOnInit() {
    this.darkModeSubscription =
      this.theme.darkMode.subscribe(value => this.darkModeActive = value);

    // this.currentWeatherSubscription =
    //   this.weather.getCurrentWeather('London').subscribe((data) => {
    //     console.log('city data', data);
    //   });
    // this.forecastSubscription =
    //   this.weather.getForecast('London').subscribe((data) => {
    //     console.log('forecast', data);
    //   });
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
    // this.currentWeatherSubscription.unsubscribe();
    // this.forecastSubscription.unsubscribe();
  }
}
