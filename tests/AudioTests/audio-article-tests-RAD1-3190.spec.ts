import { test } from '@playwright/test';
import { AudioSiteBasePage } from './abstractPage/AudioSiteBasePage';
import { ApplitoolsEyes } from '../Utilities/ApplitoolsEyes';

const applitoolsEyes = new ApplitoolsEyes();
let audioSiteBasePage: AudioSiteBasePage;

test.beforeAll(async () => {
    await applitoolsEyes.setConfig();
});

test.describe('Audio Article Tests', () => {
    test.beforeEach(async ({ page }) => {
        audioSiteBasePage = new AudioSiteBasePage(page);
    });

    test('Breadcrumbs', async ({ baseURL, isMobile }) => {
        if (!isMobile) {
            if (!baseURL) {
                throw new Error('baseURL is not provided');
            }
            await audioSiteBasePage.gotoHomePage(baseURL);
            await audioSiteBasePage.goToArticle();
            await audioSiteBasePage.verifyBreadCrumbs();
        }
    });

    test.afterEach(async () => {
        await applitoolsEyes.clAsync();
    });
});

test.afterAll(async() => {
    await applitoolsEyes.getAllTestResults();
});
