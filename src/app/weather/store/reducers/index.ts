import * as fromReducer from '@app/weather/store/reducers/weather';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface WeatherFeatureState {
  weather: fromReducer.WeatherState;
}

export const reducers: ActionReducerMap<WeatherFeatureState> = {
  weather: fromReducer.reducer,
};


export const getWeatherFeatureState = createFeatureSelector<WeatherFeatureState>('weatherFeature');
