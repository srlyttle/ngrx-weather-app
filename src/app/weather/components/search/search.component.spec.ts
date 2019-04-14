import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

import Spy = jasmine.Spy;

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    spyOn(component, 'search');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not call search if search form is not valid', () => {
    component.onSubmit();
    expect(component.search).toHaveBeenCalledTimes(0);
  });
  it('should call search if search form is not valid', () => {
    const cityControl = component.searchForm.controls['city'];
    cityControl.setValue('Belfast');
    component.onSubmit();
    expect(component.search).toHaveBeenCalledTimes(1);
  });
});
