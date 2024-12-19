const { test, expect } = require("@playwright/test");
import { ai, aiFixture } from "@zerostep/playwright";

test("AI’s capabilities and limitations in automated test executions", async ({ page }) => {
  const aiArgs = { page, test };
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

  const prices = await ai("What are the prices goven for Tomato in the table",aiArgs);
  console.log(prices);

  const pricesDiff = await ai("Give me the difference in the prices of Rice",aiArgs);
  console.log(pricesDiff);

  await ai("Change Page size to 20", aiArgs)
  const getHighestPrice = await ai("Get all the highest value product name", aiArgs)
  console.log(getHighestPrice)

  await ai("Change the Delivery Date to 26th December",aiArgs);
  const changeDate = await ai("Get the changed Delivery Date",aiArgs);
  console.log(changeDate);

});
