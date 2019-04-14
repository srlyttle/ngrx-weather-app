import { Component, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weather, WeatherList } from '@app/model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {

  @Input() cityWeather: Weather;
  weatherList: WeatherList[];
  timeHeaders: string[];
  constructor() { }

  ngOnChanges() {
    this.timeHeaders = this.filterWeather(this.cityWeather);
    console.log('weatherList', this.cityWeather);
  }

  filterWeather(weather: Weather): string[] {
    return weather[0].list
      .map((weatherList: WeatherList) => {
        return weatherList.dt_txt;
      });
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

  getWindSpeed(weather: Weather, listIndex): number {
    return Math.round(weather.list[listIndex].wind.speed);
  }
}


