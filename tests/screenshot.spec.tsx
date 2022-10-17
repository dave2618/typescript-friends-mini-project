import { test, expect } from '@playwright/test';
test('creating screenshots', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');
  // Click text=Clinton Predovic Sr.Likes: 0LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[1]/span[1]').click();
  // Double click text=Clinton Predovic Sr.Likes: 1LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[1]/span[1]').dblclick();
  // Click div:nth-child(2) > div > .MuiPaper-root > button
  await page.locator('div:nth-child(2) > div > .MuiPaper-root > button').click();
  await expect(page).toHaveURL('http://localhost:3000/details');
  // Click [data-testid="DetailDisLikeButton"]
  await page.locator('[data-testid="DetailDisLikeButton"]').click();
  // Click [data-testid="backButton"]
  await page.locator('[data-testid="backButton"]').click();
  await expect(page).toHaveURL('http://localhost:3000/');
  // Click text=Generate New Friends
  await page.locator('text=Generate New Friends').click();
  // Click text=Miss Marcos Hyatt PhDLikes: 0LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[2]/div/div/div/button[1]/span[1]').click();
  // Double click text=Miss Marcos Hyatt PhDLikes: 1LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[2]/div/div/div/button[1]/span[1]').dblclick();
  // Triple click text=Miss Marcos Hyatt PhDLikes: 2LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[2]/div/div/div/button[1]/span[1]').click({
    clickCount: 3
  });
  // 4× click
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[2]/div/div/div/button[1]/span[1]').click({
    clickCount: 4
  });
  // Click .MuiPaper-root > button >> nth=0
  await page.locator('.MuiPaper-root > button').first().click();
  await expect(page).toHaveURL('http://localhost:3000/details');
  // Triple click [data-testid="DetailDisLikeButton"]
  await page.locator('[data-testid="DetailDisLikeButton"]').click({
    clickCount: 3
  });
  // Click [data-testid="backButton"]
  await page.locator('[data-testid="backButton"]').click();
  await expect(page).toHaveURL('http://localhost:3000/');

  await page.screenshot({path: './screenshots/screenshot.png'});
});