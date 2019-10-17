import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  currentWeather;

  constructor(public weather: WeatherService) { }

  ngOnInit() {
    this.getCurrentWeather('London');
  }

  getCurrentWeather(city) {
    this.weather.getCurrentWeather(city)
      .subscribe(data => {
        console.log(data);
        this.currentWeather = data
      });
  }
}
