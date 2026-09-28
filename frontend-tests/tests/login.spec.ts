import { test, expect } from '@playwright/test';

test('user can log in with valid credentials', async ({ page }) => {

    // Step 1: Open our local login application
    await page.goto('/');

    // Step 2: Enter the email
    await page.getByLabel('Email').fill('tester@example.com');

    // Step 3: Enter the password
    await page.getByLabel('Password').fill('Test123!');

    // Step 4: Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Step 5: Verify the success message
    await expect(page.getByText('Login successful!')).toBeVisible();

});

test('user cannot log in with invalid credentials', async ({ page }) => {

    // Step 1: Open the login application
    await page.goto('/');

    // Step 2: Enter an incorrect email
    await page.getByLabel('Email').fill('wrong@example.com');

    // Step 3: Enter an incorrect password
    await page.getByLabel('Password').fill('Wrong123!');

    // Step 4: Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Step 5: Verify the error message
    await expect(
        page.getByText('Invalid email or password')
    ).toBeVisible();

});


test('user cannot log in with empty fields', async ({ page }) => {
    await page.goto('/');

    const email = page.getByLabel('Email');
    const password = page.getByLabel('Password');

    // Click Login without entering any credentials
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify that the browser considers both fields invalid
    const emailIsValid = await email.evaluate(
        (element) => (element as HTMLInputElement).checkValidity()
    );

    const passwordIsValid = await password.evaluate(
        (element) => (element as HTMLInputElement).checkValidity()
    );

    expect(emailIsValid).toBe(false);
    expect(passwordIsValid).toBe(false);
});