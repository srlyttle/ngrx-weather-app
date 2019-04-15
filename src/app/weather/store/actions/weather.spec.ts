import * as weatherActions from '@app/weather/store/actions';
import { mockResponses } from '@app/weather/api-samples';
import { ExpectedConditions } from 'protractor';

describe('Load City Weather', () => {
    it('should create an action', () => {
        const action = new weatherActions.LoadCityWeather({ cityName: 'Belfast' });
        expect({
            ...action,
        }).toEqual({ type: weatherActions.LOAD_CITY_WEATHER, payload: { cityName: 'Belfast' } });
    });
});

describe('Load City Weather Success', () => {
    it('should create an action', () => {
        const action = new weatherActions.LoadCityWeatherSuccess(mockResponses.cityWeatherResponse);
        expect({
            ...action,
        }).toEqual({ type: weatherActions.LOAD_CITY_WEATHER_SUCCESS, payload: mockResponses.cityWeatherResponse });
    });
});
