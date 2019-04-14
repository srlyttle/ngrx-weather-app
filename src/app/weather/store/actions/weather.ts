import { Action } from '@ngrx/store';
import { Weather } from '@app/model/weather';

export const LOAD_CITY_WEATHER = '[Weather] Load City Weather';
export const LOAD_CITY_WEATHER_SUCCESS = '[Weather] Load City Weather Success';
export const LOAD_CITY_WEATHER_FAIL = '[Weather] Load City Weather Fail';



export class LoadCityWeather implements Action {
    readonly type = LOAD_CITY_WEATHER;
    constructor(public payload: { cityName: string }) { }
}
export class LoadCityWeatherSuccess implements Action {
    readonly type = LOAD_CITY_WEATHER_SUCCESS;
    constructor(public payload: Weather) { }
}

export class LoadCityWeatherFail implements Action {
    readonly type = LOAD_CITY_WEATHER_FAIL;
    constructor(public payload: any) { }
}


export type WeatherAction = LoadCityWeather | LoadCityWeatherSuccess | LoadCityWeatherFail;

