import { Page, expect } from '@playwright/test';
import PageElements from '../PageElements/PageElements';
import BasePage from "../../Utilities/BasePage";

export class NewsTalkzbHomePage extends BasePage {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async gotoHomePage(baseUrl: string): Promise<void> {
    await this.page.goto(baseUrl);
  }

  async goToArticle(): Promise<void> {
    await this.isElementVisible(PageElements.mediaArticle);
    await this.waitAndClick(PageElements.mediaArticle);
    await this.isElementVisible(PageElements.getTheIheartAppButton);
  }

  async verifyRegionPicker(): Promise<void> {
    await this.isElementVisible(PageElements.headerRegionPicker);
    await this.waitAndClick(PageElements.headerRegionPicker);
    await this.waitAndClick(PageElements.regionSelectionWellington);
    await this.isElementInVisible(PageElements.regionSelectionWellington);
    await this.isElementTextVisible(PageElements.regionSelected, 'Wellington 89.3 FM, 1035 AM');
  }

  // ... other methods ...
}
