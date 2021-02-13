export interface WeatherResponse {
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
  sys: SunriseSunsetInfo;
  timezone: number;
  visibility: number;
  weather: WeatherInfo[];
  wind: Wind;
}

export interface Coordinates {
  lat: string;
  long: string;
}

export interface MainWeather {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface SunriseSunsetInfo {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface WeatherInfo {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Wind {
  deg: number;
  speed: number;
}
