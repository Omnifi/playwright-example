import { test, expect } from '@playwright/test';

test('has the correct title', async ({ page }) => {
  // Go to the page.
  await page.goto(`http://localhost:3000/`);

  // Expect a title to be "Playwright Example".
  await expect(page).toHaveTitle('Playwright Example');
});

test('has the correct heading', async ({ page }) => {
  // Go to the page.
  await page.goto(`http://localhost:3000/`);

  // Expect heading to be "Test Playwright".
  await expect(page.getByRole('heading')).toContainText('Test Playwright');
});

test('increases the count on click', async ({ page }) => {
  // Go to the page.
  await page.goto(`http://localhost:3000/`);

  // Expect button count to be 0.
  await expect(page.getByRole('button')).toContainText('count is 0');

  // Click on the count button.
  await page.getByRole('button', { name: 'count is' }).click();

  // Expect the count to be 1.
  await expect(page.getByRole('button')).toContainText('count is 1');
});
