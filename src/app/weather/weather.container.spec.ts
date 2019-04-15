import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from '@app/weather/weather.container';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromStore from '@app/weather/store';
import { mockResponses } from '@app/weather/api-samples';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: Store<fromStore.WeatherFeatureState>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [
        StoreModule.forRoot({ ...fromRoot.reducers, weatherFeature: combineReducers(fromStore.reducers) }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch an action to Load City Weather', () => {
    const action = new fromStore.LoadCityWeather({ cityName: 'Belfast' });
    component.citySearch('Belfast');
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should display the weather after a weather success action', () => {
    const action = new fromStore.LoadCityWeatherSuccess(mockResponses.cityWeatherResponse);

    store.dispatch(action);

    component.cityWeather$.subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].city.name).toBe('Belfast');
    });
  });

});
