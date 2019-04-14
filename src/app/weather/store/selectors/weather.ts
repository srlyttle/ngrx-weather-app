import { createSelector } from '@ngrx/store';
import * as fromFeature from '@app/weather/store/reducers/';
import * as fromWeather from '@app/weather/store/reducers/weather';



export const getWeatherState = createSelector(
    fromFeature.getWeatherFeatureState,
    (state: fromFeature.WeatherFeatureState) => {
        if (state) {
            return state.weather;
        }
    }
);

export const getWeatherEntitles = createSelector(
    getWeatherState,
    fromWeather.getCityEntities
);

export const getAllCities = createSelector(
    getWeatherEntitles,
    entities => {
      if (entities) {
        return Object.keys(entities).map(entityKey => {
          return entities[entityKey];
        });
      }
    }
  );
