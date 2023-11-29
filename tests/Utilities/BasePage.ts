// BasePage.ts
import { Page, expect } from '@playwright/test';
import { globalConfig } from '../config';

export default class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
        // Wait for page to be loaded
        this.waitForPageToLoad();
    }

    async isElementVisible(pageElement: string): Promise<void> {
        await expect(this.page.locator(pageElement).first()).toBeVisible();
    }

    async isElementTextVisible(pageElement: string, text: string): Promise<void> {
        await expect(this.page.locator(pageElement).first()).toHaveText(text);
    }

    async waitForPageToLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded', { timeout: globalConfig.defaultTimeout });
    }

    async isElementInVisible(pageElement: string): Promise<void> {
        await this.page.waitForTimeout(globalConfig.shortTimeout);
        await expect(this.page.locator(pageElement)).toBeHidden();
    }

    async waitAndClick(selector: string): Promise<void> {
        await this.page.waitForSelector(selector, { timeout: globalConfig.defaultTimeout });
        await this.page.click(selector);
    }

    // Additional methods and logic can be added here as per your requirements
}
