import { test } from '@playwright/test';
test('testing the theme button', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');
  // Check [data-testid="switchButton"] input[type="checkbox"]
  // await page.locator('[data-testid="switchButton"] input[type="checkbox"]').check();
  // // Click div:nth-child(2) > div > .MuiPaper-root > button
  // await page.locator('div:nth-child(2) > div > .MuiPaper-root > button').click();
  // await expect(page).toHaveURL('http://localhost:3000/details');
  // // Uncheck input[type="checkbox"]
  // await page.locator('input[type="checkbox"]').uncheck();
  // // Click [data-testid="backButton"]
  // await page.locator('[data-testid="backButton"]').click();
  // await expect(page).toHaveURL('http://localhost:3000/');
  // // Check [data-testid="switchButton"] input[type="checkbox"]
  // await page.locator('[data-testid="switchButton"] input[type="checkbox"]').check();
  // // Click text=Generate New Friends
  // await page.locator('text=Generate New Friends').click();
  // // Click div:nth-child(2) > div > .MuiPaper-root > button
  // await page.locator('div:nth-child(2) > div > .MuiPaper-root > button').click();
  // await expect(page).toHaveURL('http://localhost:3000/details');
  // // Click [data-testid="backButton"]
  // await page.locator('[data-testid="backButton"]').click();
  // await expect(page).toHaveURL('http://localhost:3000/');
});