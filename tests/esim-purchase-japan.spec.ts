import { test } from "@playwright/test";
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
    await homePage.searchCountryName("Japan");
    await page.waitForTimeout(5000);
    await homePage.clickJapanOption();
    await page.waitForTimeout(5000);
    await japanPage.isOnJapanPage();
    await page.waitForTimeout(5000);
    // await japanPage.clickFirstItemFromPackageList();
    await japanPage.clickGetEsimButton();
    await page.waitForTimeout(5000);
    await japanPage.verifyEsimPackageName();
    await page.waitForTimeout(5000);
    await japanPage.verifyEsimPackageCoverage();
    await page.waitForTimeout(5000);
    await japanPage.verifyEsimPackageData();
    await page.waitForTimeout(5000);
    await japanPage.verifyEsimPackageValidity();
    await page.waitForTimeout(5000);
    await japanPage.verifyEsimPackagePrice();
    await page.waitForTimeout(5000);
   
  });
});
