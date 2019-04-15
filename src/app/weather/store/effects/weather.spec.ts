import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';

import { WeatherService } from '@app/weather/weather.service';
import { WeatherEffect } from './weather';

import * as fromApiSamples from '../../api-samples';
import * as fromActions from '@app/weather/store/actions';
import { empty } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class TestActions extends Actions {
    constructor() {
        super();
    }

    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}
describe('Weather Effects', () => {
    let weatherService;
    let actions$: TestActions;
    let effects: WeatherEffect;
    const weatherResponse = fromApiSamples.mockResponses.cityWeatherResponse;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [WeatherService, WeatherEffect, { provide: Actions, useFactory: getActions }],
        });
        actions$ = TestBed.get(Actions);
        weatherService = TestBed.get(WeatherService);
        effects = TestBed.get(WeatherEffect);
        spyOn(weatherService, 'searchWeatherForCity').and.returnValue(of(weatherResponse));
    });

    it('loadCity$ effect should return expected observable', () => {
        const action = new fromActions.LoadCityWeather({ cityName: 'belfast' });
        const completion = new fromActions.LoadCityWeatherSuccess(weatherResponse);
        actions$.stream = hot('-a', { a: action });
        const expected = cold('-b', { b: completion });
        expect(effects.loadCity$).toBeObservable(expected);
    });
});
