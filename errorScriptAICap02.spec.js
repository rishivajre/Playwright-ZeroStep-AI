const { test, expect } = require("@playwright/test");
import { ai, aiFixture } from "@zerostep/playwright";

test("AI’s capabilities and limitations in automated test executions", async ({ page }) => {
  const aiArgs = { page, test };
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

  const pricesError = await ai("Which product has Discount price larger than the original price",aiArgs);
  console.log(pricesError);

  const pricesErrorRice = await ai("Is dicount price more than normal price in the Rice?",aiArgs);
  console.log(pricesErrorRice);

  await ai("Navigate to the table on the last page",aiArgs);
  const priceOfAlmond = await ai("what is the price of Almond.",aiArgs);
  console.log(priceOfAlmond);

});
