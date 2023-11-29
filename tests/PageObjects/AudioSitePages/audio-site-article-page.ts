import { Page } from '@playwright/test';
import PageElements from '../PageElements/PageElements';
import BasePage from '../../Utilities/BasePage';

export class AudioSiteArticlePage extends BasePage {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async verifyBreadCrumbs(): Promise<void> {
    await this.isElementVisible(PageElements.breadCrumb1Audio);
    await this.isElementVisible(PageElements.breadCrumb2Audio);
    await this.isElementVisible(PageElements.breadCrumb3Audio);
  }

  // Additional methods can be added here
}
