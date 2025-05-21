import { expect, Page, Locator } from "@playwright/test";

class HomePage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get buttonCookieAccept(): Locator {
    return this.page.locator("#onetrust-accept-btn-handler");
  }

  get buttonPushNotificationNo(): Locator {
    return this.page.locator("#wzrk-cancel");
  }

  get  firstPaidEsimPackage(): Locator {
    return this.page.locator('xpath=//div[@class="esim-card"]');
  }

  async clickCookieAccept() {
    await this.buttonCookieAccept.click();
  }

  async clickPushNotificationNo() {
    await this.buttonPushNotificationNo.click();
  }

  async waitAndClickJapanOption() {
    const searchInput = this.page.getByTestId("search-input");
    const searchResponsePromise = this.page.waitForResponse(response =>
        response.url().includes('/api/v2/store/search/?q=Japan') &&    
        response.status() === 200
    );
    await searchInput.fill("Japan");
    const searchResponse = await searchResponsePromise;
    expect(searchResponse.status()).toBe(200);
    const optionJapan = this.page.locator("span[data-testid='Japan-name']");
    await optionJapan.click();
  }
}
export { HomePage };
