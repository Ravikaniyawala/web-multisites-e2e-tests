import { Page } from '@playwright/test';
import PageElements from '../PageElements/PageElements';
import BasePage from '../../Utilities/BasePage';

export class AudioSiteHomePage extends BasePage {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async gotoHomePage(baseURL: string): Promise<void> {
    console.log(baseURL);
    await this.page.goto(baseURL);
    await this.waitAndClick(PageElements.regionSelectionAucklandAudio);
  }

  async goToArticle(): Promise<void> {
    await this.isElementVisible(PageElements.mediaArticle);
    await this.waitAndClick(PageElements.mediaArticle);
    await this.isElementVisible(PageElements.getTheIheartAppButton);
  }

  async verifyRegionPicker(): Promise<void> {
    await this.isElementVisible(PageElements.headerRegionPickerAudio);
    await this.waitAndClick(PageElements.headerRegionPickerAudio);
    await this.waitAndClick(PageElements.regionSelectionWellingtonAudio);
    await this.isElementInVisible(PageElements.regionSelectionWellingtonAudio);
    await this.isElementTextVisible(PageElements.regionSelectedAudio, 'Wellington 90.1 FM');
  }

  // Additional methods can be added here
}
