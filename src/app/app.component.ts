import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { WeatherService } from './services/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Weather App';
  darkModeActive: boolean;
  darkModeSubscription: Subscription;

  // forecast;

  constructor(public theme: ThemeService, public weather: WeatherService) {}

  ngOnInit() {
    this.darkModeSubscription =
      this.theme.darkMode.subscribe(value => this.darkModeActive = value);

    // this.getForecast('London');
  }

  // getForecast(city) {
  //   this.weather.getForecast(city)
  //     .subscribe(data => this.forecast = data);
  // }

  ngOnDestroy() {
    if (this.darkModeSubscription) {
      this.darkModeSubscription.unsubscribe();
    }
  }
}
