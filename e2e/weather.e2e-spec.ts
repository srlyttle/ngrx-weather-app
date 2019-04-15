import { WeatherPage } from './weather.po';
import { browser } from 'protractor';

describe('Weather Page', () => {
  let weatherPage: WeatherPage;

  beforeEach(() => {

    weatherPage = new WeatherPage();
    weatherPage.navigateTo();
  });
  describe('City Search ', () => {

    it('should show the error message and no cities message after an unsuccessful search', async () => {
      await weatherPage.weatherSearchBox.sendKeys('B');
      await weatherPage.weatherSearchButton.click();
      expect(await weatherPage.noCitiesDiv.isPresent()).toBe(true);
      expect(await weatherPage.searchValidationMinCharsMessage.isPresent()).toBe(true);

    });

    it('should show the inputted city weather after successful search', async () => {
      await weatherPage.weatherSearchBox.sendKeys('Belfast');
      await weatherPage.weatherSearchButton.click();
      await weatherPage.waitForElementToBeVisible(weatherPage.appResults);
      expect(await weatherPage.appResults.isPresent()).toBe(true);
      expect(await weatherPage.cityTableData.isPresent()).toBe(true);
      expect(await weatherPage.cityElementAll.first().getText()).toBe('Belfast');
    });

    it('should show multiple city weather after 2  successful searches', async () => {
      await weatherPage.weatherSearchBox.sendKeys('Belfast');
      await weatherPage.weatherSearchButton.click();
      await weatherPage.waitForElementToBeVisible(weatherPage.appResults);
      expect(await weatherPage.appResults.isPresent()).toBe(true);
      expect(await weatherPage.cityTableData.isPresent()).toBe(true);
      expect(await weatherPage.cityElementAll.first().getText()).toBe('Belfast');

      await weatherPage.weatherSearchBox.sendKeys('Marbella');
      await weatherPage.weatherSearchButton.click();
      await weatherPage.waitForElementToBeVisible(weatherPage.appResults);
      expect(await weatherPage.appResults.isPresent()).toBe(true);
      expect(await weatherPage.cityTableData.isPresent()).toBe(true);
      expect(await weatherPage.cityElementAll.last().getText()).toBe('Marbella');
    });
  });
});
