export interface City {
  id: number;
  name: string;
  population?: number;
  coord?: Coordinates;
  country?: string;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Forecast {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherDescription { // list item - weather[0]
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds { // list item - clouds
  all: number;
}

export interface Wind {  // list item - wind
  speed: number;
  deg: number;
}

export interface WeatherSys {  // list item - sys
  pod: string;
}

export interface WeatherList {
  dt: number;
  main: Forecast;
  weather: WeatherDescription[];
  clouds: Clouds;
  wind: Wind;
  sys: WeatherSys;
  dt_txt: string;
}

export interface Weather {
  city?: City;
  cod?: string;
  message?: number;
  cnt?: number;
  list?: WeatherList[];
}

export interface Summary {
  city: string;
}
