import { test, expect } from '@playwright/test'

test('waiting', async ({ page }) => {

    await page.goto('http://127.0.0.1:8081/');

    const locator = page.frameLocator("xpath=//iframe[@id='ifrm']").locator("xpath=//button[@id='iframe_1_button']");

    await expect(locator).toBeVisible();

});