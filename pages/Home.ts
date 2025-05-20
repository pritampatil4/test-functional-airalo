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

  //action methods
  async searchCountryName(countryName: string) {
    await this.fieldSearchInput.fill(countryName);
    await this.fieldSearchInput.press("Enter");
  }

  async clickCookieAccept() {
    await this.buttonCookieAccept.click();
  }

  async clickPushNotificationNo() {
    await this.buttonPushNotificationNo.click();
  }
}
export { HomePage };
