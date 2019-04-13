import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { WeatherContainer } from '@app/weather/weather.container';
import { WeatherService } from '@app/weather/weather.service';
import { SearchComponent } from '@app/weather/components/search/search.component';
import { ResultsComponent } from '@app/weather/components/results/results.component';
import { reducers } from '@app/weather/store';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('weatherFeature', reducers),
    // EffectsModule.forFeature(effects)
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
