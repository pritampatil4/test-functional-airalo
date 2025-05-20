import { test, expect } from '@playwright/test';

test('visit Airalo website', async ({ page }) => {
  await page.goto('/');
});
