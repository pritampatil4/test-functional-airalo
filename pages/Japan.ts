import { expect, Page } from "@playwright/test";

class JapanPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //getter methods
  //   get firstItemFromPackageList() {
  //     return this.page.locator('xpath=//div[contains(@class, "package-list")]/div/div[1]');
  //   }

  get buttonGetEsim() {
    return this.page.locator(
      'xpath=//div[contains(@class, "package-list")]/div/div[1]//button'
    );
  }

  get labelEsimPackageName() {
    return this.page.locator(
      'xpath=//div[@data-testid="sim-detail-operator-title"]/p'
    );
  }

  get labelEsimPackageCoverage() {
    return this.page.locator(
      'xpath=//ul[@data-testid="sim-detail-info-list"]//p[@data-testid="COVERAGE-value"]'
    );
  }

  get labelEsimPackageData() {
    return this.page.locator(
      'xpath=//ul[@data-testid="sim-detail-info-list"]//p[@data-testid="DATA-value"]'
    );
  }

  get labelEsimPackageValidity() {
    return this.page.locator(
      'xpath=//ul[@data-testid="sim-detail-info-list"]//p[@data-testid="VALIDITY-value"]'
    );
  }

  get labelEsimPackagePrice() {
    return this.page.locator(
      'xpath=//ul[@data-testid="sim-detail-info-list"]//p[@data-testid="PRICE-value"]'
    );
  }

  //action methods
  async isOnJapanPage() {
    const pageUrl = this.page.url();
    expect(pageUrl).toContain("/japan-esim");
  }

  // async clickFirstItemFromPackageList() {
  //     await this.firstItemFromPackageList.click();
  // }

  async clickGetEsimButton() {
    await this.buttonGetEsim.click();
  }

  async verifyEsimPackageName() {
    const esimPackageName = await this.labelEsimPackageName.innerText();
    expect(esimPackageName).toContain("Moshi Moshi");
  }

  async verifyEsimPackageCoverage() {
    const esimPackageCoverage = await this.labelEsimPackageCoverage.innerText();
    expect(esimPackageCoverage).toContain("Japan");
  }

  async verifyEsimPackageData() {
    const esimPackageData = await this.labelEsimPackageData.innerText();
    expect(esimPackageData).toContain("1 GB");
  }

  async verifyEsimPackageValidity() {
    const esimPackageValidity = await this.labelEsimPackageValidity.innerText();
    expect(esimPackageValidity).toContain("1 Day");
  }

  async verifyEsimPackagePrice() {
    const esimPackagePrice = await this.labelEsimPackagePrice.innerText();
    expect(esimPackagePrice).toContain("$0.00 USD");
  }
}

export { JapanPage };
