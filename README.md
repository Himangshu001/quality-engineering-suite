# Quality Engineering Automation Suite

A practical quality engineering project demonstrating UI automation, API testing, cross-browser testing, and CI/CD automation.

## Overview

This project combines:

- Playwright + TypeScript for web UI automation
- FastAPI + Python for API testing
- Pytest for backend test automation
- GitHub Actions for continuous integration
- Chromium, Firefox, and WebKit browser coverage

The project uses a small local login application as a test fixture.

> Note: The login application is intentionally a demo test application. The credentials are hard-coded for testing and are not intended for production authentication.

## Project Structure

```text
quality-engineering-suite/
├── .github/
│   └── workflows/
│       └── ci.yml
├── api-tests/
│   ├── tests/
│   │   └── test_api.py
│   ├── .gitignore
│   ├── main.py
│   └── requirements.txt
├── app/
│   └── index.html
├── bug-reports/
├── frontend-tests/
│   ├── tests/
│   │   ├── example.spec.ts
│   │   ├── homepage.spec.ts
│   │   └── login.spec.ts
│   ├── package.json
│   └── playwright.config.ts
└── .gitignore

## Current Test Suite

| Area | Tests | Browsers |
|---|---:|---|
| Playwright UI | 3 scenarios | Chromium, Firefox, WebKit |
| API / Pytest | 5 scenarios | Python |
| CI | Automated | GitHub Actions |

### Latest CI Status

GitHub Actions currently runs both API and Playwright test suites on pushes and pull requests to `main`.