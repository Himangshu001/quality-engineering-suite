# BUG-001: Invalid login credentials return an error message

## Summary

Verify that the login application displays an appropriate error message when a user enters invalid credentials.

## Environment

- Browser: Chromium
- Application: Quality Engineering Login Portal
- URL: http://localhost:8000
- Test Type: Functional / UI

## Preconditions

- Login application is available.
- User is on the login page.

## Steps to Reproduce

1. Open the login portal.
2. Enter `wrong@example.com` in the Email field.
3. Enter `Wrong123!` in the Password field.
4. Click the **Login** button.

## Expected Result

The application should reject the invalid credentials and display:

`Invalid email or password`

## Actual Result

The application displays:

`Invalid email or password`

## Status

Closed

## Automated Coverage

Covered by:

`frontend-tests/tests/login.spec.ts`

Test case:

`user cannot log in with invalid credentials`