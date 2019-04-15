import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weather, WeatherList } from '@app/model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnChanges {

  @Input() cityWeather: Weather[];
  weatherList: WeatherList[];
  timeHeaders: string[];
  constructor() { }

  ngOnChanges() {
    this.timeHeaders = this.filterWeather(this.cityWeather);
  }

  filterWeather(weather: Weather[]): string[] {
    let weatherHeaders: string[] = [];
    if (weather && weather[0]) {
      weatherHeaders = weather[0].list
        .map((weatherList: WeatherList) => {
          return weatherList.dt_txt;
        });
    }
    return weatherHeaders;
  }

  getCityName(weather: Weather): string {
    return weather.city.name;
  }
  getTemperature(weather: Weather, listIndex): number {
    return Math.round(weather.list[listIndex].main.temp);
  }

  getWeatherIconSrc(weather: Weather, listIndex) {
    const icon = weather.list[listIndex].weather[0].icon;
    return `http://openweathermap.org/img/w/${icon}.png`;
  }

  getWeatherIconAlt(weather: Weather, listIndex): string {
    return weather.list[listIndex].weather[0].description;
  }

}


