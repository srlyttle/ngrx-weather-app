import { browser, by, element, ElementFinder, ElementArrayFinder, protractor } from 'protractor';
import { AppPage } from './app.po';

export class WeatherPage {

  weatherPageTitle: ElementFinder = element(by.css('[xauto-weather-title]'));
  weatherSearchBox: ElementFinder = element(by.css('[xauto-weather-search-input]'));
  weatherSearchButton: ElementFinder = element(by.css('[xauto-weather-search-button]'));
  appResults: ElementFinder = element(by.css('app-results'));
  cityTableData: ElementFinder = element(by.css('[xauto-city-name]'));
  cityElementAll: ElementArrayFinder = element.all(by.css('[xauto-city-name]'));
  noCitiesDiv: ElementFinder = element(by.css('[xauto-weather-no-cities]'));
  searchValidationMinCharsMessage: ElementFinder = element(by.css('[xauto-weather-search-validation-min-message]'));

  navigateTo() {
    return browser.get('/');
  }

  waitForElementToBeVisible(ef: ElementFinder, timeOut = 5000) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(ef), timeOut);
  }
}
