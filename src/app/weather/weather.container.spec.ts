import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from '@app/weather/weather.container';
import { StoreModule, combineReducers } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromReducers from '@app/weather/store/reducers';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [
        StoreModule.forRoot({ ...fromRoot.reducers, weatherFeature: combineReducers(fromReducers.reducers) }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // PLEASE IMPLEMENT MORE TESTS
});
