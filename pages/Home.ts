import { expect, Page, Locator } from "@playwright/test";

class HomePage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //getter methods
  get fieldSearchInput(): Locator {
    return this.page.getByTestId("search-input");
  }

  get buttonCookieAccept(): Locator {
    return this.page.locator("#onetrust-accept-btn-handler");
  }

  get buttonPushNotificationNo(): Locator {
    return this.page.locator("#wzrk-cancel");
  }

  get optionJapan(): Locator {
    return this.page.locator('xpath=//ul/li/span[@data-testid="Japan-name" and text()="Japan"]');
  }

  get  firstPaidEsimPackage(): Locator {
    return this.page.locator('xpath=//div[@class="esim-card"]');
  }


  //action methods
  async searchCountryName(countryName: string) {
    await this.fieldSearchInput.fill(countryName);
    await this.page.waitForTimeout(5000);
    // await this.fieldSearchInput.press("Enter");
  }

  async clickCookieAccept() {
    await this.buttonCookieAccept.click();
  }

  async clickPushNotificationNo() {
    await this.buttonPushNotificationNo.click();
  }

  async clickJapanOption() {
    await this.optionJapan.click({force: true});
  }

  


}
export { HomePage };
