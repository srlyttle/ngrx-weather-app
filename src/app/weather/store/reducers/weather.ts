import * as fromActions from '@app/weather/store/actions';
export interface WeatherState {
  entities: { [id: number]: any };
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
    default:
      return state;
  }
}
