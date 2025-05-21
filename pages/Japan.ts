import { expect, Page } from "@playwright/test";

class JapanPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
 
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

  get popupESimPackageDetailPopup() {
    const packageDetailPopup = this.page.locator(
      'div[data-testid="package-detail"]'
    );
    expect(packageDetailPopup).toBeVisible({ timeout: 10000 });
    return this.page.locator('div[data-testid="package-detail"]');
  }

  async isOnJapanPage() {
    await this.page.waitForURL(/\/japan-esim/);
    const pageUrl = this.page.url();
    expect(pageUrl).toContain("/japan-esim");
  }

  async clickGetEsimButton() {
    await this.buttonGetEsim.scrollIntoViewIfNeeded();
    await this.buttonGetEsim.click();
  }

  async verifyEsimPackageName() {
    const esimPackageName = await this.labelEsimPackageName.innerText();
    expect(esimPackageName).toContain("Moshi Moshi");
  }

  async verifyPackageTitle() {
    const packageTitleLocator = this.popupESimPackageDetailPopup.locator(
      'div[data-testid="sim-detail-operator-title"] p'
    );
    await expect(packageTitleLocator).toHaveText("Moshi Moshi");
  }

  async verifyPackageCoverage() {
    const packageCoverageLocator = this.popupESimPackageDetailPopup.locator(
      '//ul[@data-testid="sim-detail-info-list"]//p[@data-testid="COVERAGE-value"]'
    );
    await expect(packageCoverageLocator).toHaveText("Japan");
  }

  async verifyPackageData() {
    const packageDataLocator = this.popupESimPackageDetailPopup.locator(
      '//ul[@data-testid="sim-detail-info-list"]//p[@data-testid="DATA-value"]'
    );
    await expect(packageDataLocator).toHaveText("1 GB");
  }

  async verifyPackageValidity() {
    const packageValidityLocator = this.popupESimPackageDetailPopup.locator(
      '//ul[@data-testid="sim-detail-info-list"]//p[@data-testid="VALIDITY-value"]'
    );
    await expect(packageValidityLocator).toHaveText("1 Day");
  }

  async verifyPackagePrice() {
    const packagePriceLocator = this.popupESimPackageDetailPopup.locator(
      '//ul[@data-testid="sim-detail-info-list"]//p[@data-testid="PRICE-value"]'
    );
    await expect(packagePriceLocator).toHaveText("$0.00 USD");
  }
}

export { JapanPage };
