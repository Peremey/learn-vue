import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro

test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('HELLO');
})

test.describe('e2e Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('text in alert', async ({ page }) => {
    const alert__text =  page.locator('h1') ;
    await expect(alert__text).toHaveText('HELLO');
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })
})
