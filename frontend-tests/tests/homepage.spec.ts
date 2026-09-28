import { test, expect } from '@playwright/test';

test('homepage displays a heading', async ({ page }) => {

    // Step 1: Open the website
    await page.goto('https://playwright.dev/');

    // Step 2: Find the first heading on the page
    const heading = page.getByRole('heading').first();

    // Step 3: Check that the heading is visible
    await expect(heading).toBeVisible();

});