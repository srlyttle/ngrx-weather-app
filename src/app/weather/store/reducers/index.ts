import * as fromReducer from '@app/weather/store/reducers/weather';
import { ActionReducerMap } from '@ngrx/store';

export interface NotesFeatureState {
  weather: fromReducer.WeatherState;
}

export const reducers: ActionReducerMap<NotesFeatureState> = {
  weather: fromReducer.reducer,
};
