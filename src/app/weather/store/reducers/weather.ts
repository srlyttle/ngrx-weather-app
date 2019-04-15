import * as fromActions from '@app/weather/store/actions';
import { Weather } from '@app/model/weather';
export interface WeatherState {
  entities: { [id: string]: Weather };
  loading: any;
  error: any;
}

export const initialState: WeatherState = {
  entities: {},
  loading: false,
  error: null,
};

export function reducer(state = initialState, action: fromActions.WeatherAction): WeatherState {
  switch (action.type) {
    case fromActions.LOAD_CITY_WEATHER:
      return {
        ...state,
        loading: true
      };

    case fromActions.LOAD_CITY_WEATHER_SUCCESS:
      const weatherAdded: Weather = action.payload;
      let errorMessage = null;
      let newEntities = {};
      if (state.entities[weatherAdded.city.name]) {
        errorMessage = 'City Already Addded';
        newEntities = { ...state.entities };
      } else {
        newEntities = { ...state.entities, [weatherAdded.city.name]: weatherAdded };
      }

      return {
        ...state,
        entities: newEntities,
        loading: false,
        error: errorMessage
      };

    case fromActions.LOAD_CITY_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}


export const getCityEntities = (state: WeatherState) => state.entities;
