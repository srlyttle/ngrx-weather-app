import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherContainer } from '@app/weather/weather.container';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WeatherContainer
  }
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
