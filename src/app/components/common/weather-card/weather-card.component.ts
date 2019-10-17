import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  currentWeather;

  constructor(public weather: WeatherService, public date: DateService) { }

  ngOnInit() {
    this.getCurrentWeather('London');
  }

  getCurrentWeather(city: string) {
    this.weather.getCurrentWeather(city)
      .subscribe(data => {
        this.currentWeather = data;
        this.transformData(this.currentWeather);
      });

  }

  transformData(data) {
    data.main.temp = this.weather.roundDegrees(data.main.temp);
    data.main.temp_min = this.weather.roundDegrees(data.main.temp_min);
    data.main.temp_max = this.weather.roundDegrees(data.main.temp_max);
    data.sys.sunrise = this.date.formatDate(data.sys.sunrise);
    data.sys.sunset = this.date.formatDate(data.sys.sunset);
  }

}
