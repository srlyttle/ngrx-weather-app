import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppRoutingModule } from '@app/app.routing.module';
import { WeatherModule } from '@app/weather/weather.module';
import { environment } from '../environments/environment';
import {  reducers, effects } from '@app/store';
import { AppComponent } from '@app/app.component';
export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
