import { test, expect } from '../fixtures';
import { loginData } from '../test-data/loginData';

test('user can log in with valid credentials', {
    tag: '@smoke',
}, async ({ loginPage }) => {
    await loginPage.goto();

    await loginPage.login(
        loginData.validUser.email,
        loginData.validUser.password
    );

    await loginPage.expectSuccessMessage();
});

test('user cannot log in with invalid credentials', {
    tag: '@regression',
}, async ({ loginPage }) => {
    await loginPage.goto();

    await loginPage.login(
        loginData.invalidUser.email,
        loginData.invalidUser.password
    );

    await loginPage.expectErrorMessage();
});

test('user cannot log in with empty fields', async ({ loginPage }) => {
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