import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChanges, SimpleChange, DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ResultsComponent } from './results.component';
import { mockResponses } from '@app/weather/api-samples';

import Spy = jasmine.Spy;

describe('Results Component', () => {
    let component: ResultsComponent;
    let fixture: ComponentFixture<ResultsComponent>;
    let el: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultsComponent],
            imports: [FormsModule, ReactiveFormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultsComponent);
        component = fixture.componentInstance;
        component.cityWeather = [mockResponses.cityWeatherResponse];
        el = fixture.debugElement;
        component.ngOnChanges();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create time headers', () => {
        expect(component.timeHeaders.length).toBe(8);
    });

    it('should render correct city name', () => {
        expect(el.queryAll(By.css('[xauto-city-name]'))[0].nativeElement.textContent).toBe('Belfast');
    });
    it('should render correct temperature and windspeed', () => {
        expect(el.queryAll(By.css('[xauto-time1]'))[0].nativeElement.textContent).toBe('9° ');
    });

});
