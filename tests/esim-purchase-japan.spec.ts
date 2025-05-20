// tests/airalo.spec.ts
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/Home";

test.describe("Airalo eSIM Purchase Flow - Japan", () => {
  test("eSIM Purchase Flow", async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto("https://www.airalo.com/");
    await homePage.searchCountryName("Japan");
    await homePage.clickCookieAccept();
    await homePage.clickPushNotificationNo();
  });
});
