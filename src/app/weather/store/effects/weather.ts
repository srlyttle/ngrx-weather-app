import { Injectable } from '@angular/core';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromActions from '@app/weather/store/actions';
import { WeatherService } from '@app/weather/weather.service';
import * as fromWeatherMapper from '@app/weather/store/mappers/city-weather.data-mapping';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';


@Injectable()
export class WeatherEffect {
    constructor(private actions$: Actions, private weatherService: WeatherService) { }
    @Effect()
    loadCity$ = this.actions$.ofType(fromActions.LOAD_CITY_WEATHER).pipe(

        switchMap((action: fromActions.LoadCityWeather) => {
            const searchValue = action.payload.cityName;
            return this.weatherService.searchWeatherForCity(searchValue).pipe(
                map((data) => {
                    const mappedData = fromWeatherMapper.mapCityWeather(data);
                    return new fromActions.LoadCityWeatherSuccess(mappedData);
                })

            );
        }),
        catchError(error => of(new fromActions.LoadCityWeatherFail(error)))
    );
}
