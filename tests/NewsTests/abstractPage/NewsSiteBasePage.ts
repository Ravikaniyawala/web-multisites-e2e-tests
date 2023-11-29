// NewsSiteBasePage.ts
import { Page } from '@playwright/test';
import { NewsTalkzbHomePage } from '../../PageObjects/NewsTalkZbPages/newstalkzb-home-page';
import { NewsTalkzbArticlePage } from '../../PageObjects/NewsTalkZbPages/newstalkzb-article-page';

export class NewsSiteBasePage {
    private newsTalkZbHomePage: NewsTalkzbHomePage;
    private newsTalkZbArticlePage: NewsTalkzbArticlePage;

    constructor(private page: Page) {
        this.newsTalkZbHomePage = new NewsTalkzbHomePage(page);
        this.newsTalkZbArticlePage = new NewsTalkzbArticlePage(page);
    }

    async gotoHomePage(baseURL: string): Promise<void> {
        await this.newsTalkZbHomePage.gotoHomePage(baseURL);
    }

    async goToArticle(): Promise<void> {
        await this.newsTalkZbHomePage.goToArticle();
    }

    async verifyBreadCrumbs(): Promise<void> {
        await this.newsTalkZbArticlePage.verifyBreadCrumbs();
    }

    async verifyRegionPicker(): Promise<void> {
        await this.newsTalkZbHomePage.verifyRegionPicker();
    }

    // Additional methods specific to news site can be added here
}
