import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '@app/weather/store';
import { Weather } from '@app/model/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.container.html'
})
export class WeatherContainer implements OnInit {

  cityWeather$: Observable<Weather[]>;
  constructor(private store: Store<fromStore.WeatherFeatureState>) { }

  ngOnInit() {
    this.cityWeather$ = this.store.select(fromStore.getAllCities);
  }
  citySearch(searchValue: string) {
    this.store.dispatch(new fromStore.LoadCityWeather({ cityName: searchValue }));
  }
}
