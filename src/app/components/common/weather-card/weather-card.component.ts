import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../../../services/weather.service';
import { DateService } from '../../../services/date.service';
import { ThemeService } from '../../../services/theme.service';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input('city') cityName: string;

  currentWeather;
  darkModeActive: boolean;
  darkModeSubscription: Subscription;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    public weather: WeatherService,
    public date: DateService,
    private theme: ThemeService
  ) { }

  ngOnInit() {
    this.getCurrentWeather(this.cityName);
    this.darkModeSubscription =
      this.theme.darkMode.subscribe(value => this.darkModeActive = value);
  }

  getCurrentWeather(cityName: string) {
    this.weather
      .getCurrentWeather(cityName)
      .subscribe(data => this.currentWeather = this.transformData(data));
  }

  transformData(data) {
    const transformedData = {
      ...data,
      main: {
        ...data.main,
        temp: this.weather.roundDegrees(data.main.temp),
        temp_min: this.weather.roundDegrees(data.main.temp_min),
        temp_max: this.weather.roundDegrees(data.main.temp_max)
      },
      sys: {
        ...data.sys,
        sunrise: this.date.formatDate(data.sys.sunrise + data.timezone),
        sunset: this.date.formatDate(data.sys.sunset + data.timezone),
      },
      timezone: this.date.timezoneOffset(data.timezone)
    }

    return transformedData;
  }

}
