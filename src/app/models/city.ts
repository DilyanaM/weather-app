import { Coordinates, MainWeather, WeatherInfo, Wind } from '../models';

export interface CityWeatherData {
  base: string;
  clouds: {
    [key: string]: number;
  };
  cod: number;
  coord: Coordinates;
  dt: number; // timestamp
  id: number;
  main: MainWeather;
  name: string;
  sys: TransformedSunriseSunsetInfo;
  timezone: string;
  visibility: number;
  weather: WeatherInfo[];
  wind: Wind;
}

interface TransformedSunriseSunsetInfo {
  country: string;
  id: number;
  sunrise: string;
  sunset: string;
  type: number;
}
