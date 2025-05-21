import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/Home";
import { JapanPage } from "../pages/Japan";

test.describe("Airalo eSIM Purchase Flow - Japan", () => {
  test("eSIM Purchase Flow", async ({ page }) => {
    const homePage = new HomePage(page);
    const japanPage = new JapanPage(page);
    await page.goto("/", { waitUntil: 'domcontentloaded'});
    await homePage.clickCookieAccept();
    if (!test.info().project.use.headless) {
      await homePage.clickPushNotificationNo();
    }
    await homePage.searchJapanCountryName();
    await homePage.waitAndClickJapanOption();
    await japanPage.isOnJapanPage();
    await japanPage.clickGetEsimButton();
    await japanPage.verifyPackageTitle();
    await japanPage.verifyPackageCoverage();
    await japanPage.verifyPackageData();
    await japanPage.verifyPackageValidity();
    await japanPage.verifyPackagePrice();
  });
});
