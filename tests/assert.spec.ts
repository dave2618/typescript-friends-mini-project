import { test, expect } from '@playwright/test';

test('testing number of likes', async ({ page }) => {


  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');
  // Click text=Karen ReichertLikes: 0LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[1]/span[1]').click();
  // Double click text=Karen ReichertLikes: 1LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[1]/span[1]').dblclick();
  // Triple click text=Karen ReichertLikes: 2LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[1]/span[1]').click({
    clickCount: 3
  });
  // 4× click
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[1]/span[1]').click({
    clickCount: 4
  });
  // 5× click
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[1]/span[1]').click({
    clickCount: 5
  });
  // Click text=Karen ReichertLikes: 14LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[1]/span[1]').click();
  // Click text=Karen ReichertLikes: 15LikeDislike >> [data-testid="LikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[1]/span[1]').click();
  // Click text=Karen ReichertLikes: 16LikeDislike >> [data-testid="DisLikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[2]/span[1]').click();
  // Double click text=Karen ReichertLikes: 15LikeDislike >> [data-testid="DisLikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[2]/span[1]').dblclick();
  // Triple click text=Karen ReichertLikes: 14LikeDislike >> [data-testid="DisLikeButton"]
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[2]/span[1]').click({
    clickCount: 3
  });
  // 4× click
  await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/button[2]/span[1]').click({
    clickCount: 4
  });

  // get the number of likes
  const numberOfLikes = await page.locator('xpath=//*[@id="root"]/div/div/div[2]/div[1]/div/div/div/p').textContent();

  expect(numberOfLikes).toEqual('Likes: 7');

});