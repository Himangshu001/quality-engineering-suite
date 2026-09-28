import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tester@example.com', 'Test123!');

  await loginPage.expectSuccessMessage();
});

test('user cannot log in with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrong@example.com', 'Wrong123!');

  await loginPage.expectErrorMessage();
});

test('user cannot log in with empty fields', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.loginButton.click();

  const emailIsValid = await loginPage.emailInput.evaluate(
    (element) => (element as HTMLInputElement).checkValidity()
  );

  const passwordIsValid = await loginPage.passwordInput.evaluate(
    (element) => (element as HTMLInputElement).checkValidity()
  );

  expect(emailIsValid).toBe(false);
  expect(passwordIsValid).toBe(false);
});