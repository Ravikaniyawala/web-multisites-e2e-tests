import { test } from '@playwright/test';
import { NewsSiteBasePage } from './abstractPage/NewsSiteBasePage';
import { ApplitoolsEyes } from '../Utilities/ApplitoolsEyes';
import pageElements from '../PageObjects/PageElements/PageElements';

const applitoolsEyes = new ApplitoolsEyes();
let newsSiteBasePage: NewsSiteBasePage;

test.beforeAll(async () => {
    await applitoolsEyes.setConfig();
});

test.describe('NZME Flyout Header Tests - NZB', () => {
    test.beforeEach(async ({ page }) => {
        newsSiteBasePage = new NewsSiteBasePage(page);
    });

    test('Flyout Header-Region Picker', async ({ baseURL, isMobile }) => {
        test.skip(isMobile, 'Flyout Header is only for Desktop view');
        if (!baseURL) {
            throw new Error('baseURL is not provided');
        }
        await newsSiteBasePage.gotoHomePage(baseURL);
        await newsSiteBasePage.verifyRegionPicker();
        // Optional: Visual checks with Applitools
        // await applitoolsEyes.eyesCheckRegion("Region Picker", pageElements.regionSelected);
    });

    test.afterEach(async () => {
        await applitoolsEyes.clAsync();
    });
});

test.afterAll(async () => {
    await applitoolsEyes.getAllTestResults();
});
