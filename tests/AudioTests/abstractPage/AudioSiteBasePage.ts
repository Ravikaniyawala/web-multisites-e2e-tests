// AudioSiteBasePage.ts
import { Page } from '@playwright/test';
import { AudioSiteHomePage } from '../../PageObjects/AudioSitePages/audio-site-home-page';
import { AudioSiteArticlePage } from '../../PageObjects/AudioSitePages/audio-site-article-page';

export class AudioSiteBasePage {
    private audioHomePage: AudioSiteHomePage;
    private audioArticlePage: AudioSiteArticlePage;

    constructor(private page: Page) {
        this.audioHomePage = new AudioSiteHomePage(page);
        this.audioArticlePage = new AudioSiteArticlePage(page);
    }

    async gotoHomePage(baseURL: string): Promise<void> {
        await this.audioHomePage.gotoHomePage(baseURL);
    }

    async goToArticle(): Promise<void> {
        await this.audioHomePage.goToArticle();
    }

    async verifyBreadCrumbs(): Promise<void> {
        await this.audioArticlePage.verifyBreadCrumbs();
    }

    async verifyRegionPicker(): Promise<void> {
        await this.audioHomePage.verifyRegionPicker();
    }
}
