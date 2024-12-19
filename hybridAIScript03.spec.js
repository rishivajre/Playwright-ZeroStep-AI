const { test, expect } = require("@playwright/test");
import { ai, aiFixture } from "@zerostep/playwright";

test("AI’s capabilities and limitations in automated test executions", async ({ page }) => {
  const aiArgs = { page, test };
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

  //hybrid AI+PW script
  await ai("Navigate to the table on the last page where Almond is listed.", aiArgs);

  const correctPrice = await page.locator('tr:has-text("Almond") >> td:nth-child(2)').textContent();
  
  console.log('Price of Almond (AI + Playwright):', correctPrice);

  console.log('------------------------------------------------------------------')
  
  await page.reload();
  // Conventional PW Script
  const lastPageButton = page.locator('a[aria-label="Last"]');
  await lastPageButton.click();
  await page.waitForLoadState('networkidle');
  const almondRow = page.locator('tr', { hasText: 'Almond' });
  await almondRow.waitFor();

  const priceOfAlmond = await almondRow.locator('td:nth-child(2)').textContent();
  console.log('Price of Almond:', priceOfAlmond || 'Not Found');
});
