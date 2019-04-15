import * as fromWeatherReducer from '@app/weather/store/reducers/weather';
import * as fromWeatherActions from '@app/weather/store/actions';
import { mockResponses } from '@app/weather/api-samples';
import { Weather } from '@app/model/weather';

describe('Weather Reducer', () => {

    it('LOAD_CITY_WEATHER', () => {
        const { initialState, reducer } = fromWeatherReducer;
        const action = new fromWeatherActions.LoadCityWeather({ cityName: 'Belfast' });
        const state = reducer(initialState, action);
        expect(state.loading).toEqual(true);
    });

    it('LOAD_WEATHER_SUCCESS', () => {
        const weatherResponse: Weather = mockResponses.cityWeatherResponse;
        const { initialState, reducer } = fromWeatherReducer;
        const action = new fromWeatherActions.LoadCityWeatherSuccess(weatherResponse);
        const state = reducer(initialState, action);
        const expectEntity: { [id: string]: Weather } = {
            [weatherResponse.city.name]: weatherResponse,
        };
        expect(state.entities).toEqual(expectEntity);
        expect(state.loading).toEqual(false);
    });

    it('LOAD_CITY_WEATHER_FAIL', () => {
        const weatherResponse: Weather = mockResponses.cityWeatherResponse;
        const { initialState, reducer } = fromWeatherReducer;
        const error = { errorMessage: 'service unavailable' };
        const action = new fromWeatherActions.LoadCityWeatherFail(error);
        const state = reducer(initialState, action);
        expect(state.error).toEqual({ ...error });
        expect(state.loading).toEqual(false);
    });

});
