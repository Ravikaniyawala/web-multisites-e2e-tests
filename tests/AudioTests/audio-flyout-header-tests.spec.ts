import { test } from '@playwright/test';
import { AudioSiteBasePage } from './abstractPage/AudioSiteBasePage';
import { ApplitoolsEyes } from '../Utilities/ApplitoolsEyes';

const applitoolsEyes = new ApplitoolsEyes();
let audioSiteBasePage: AudioSiteBasePage;

test.beforeAll(async () => {
  await applitoolsEyes.setConfig();
});

test.describe('Audio Site Flyout Header Tests', () => {
  test.beforeEach(async ({ page }) => {
    audioSiteBasePage = new AudioSiteBasePage(page);
  });

  test('Flyout Header-Region Picker', async ({ baseURL, isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
    if (!baseURL) {
      throw new Error('baseURL is not provided');
    }
    await audioSiteBasePage.gotoHomePage(baseURL);
    await audioSiteBasePage.verifyRegionPicker();
  });

  test.afterEach(async () => {
    await applitoolsEyes.clAsync();
  });
});

test.afterAll(async() => {
  await applitoolsEyes.getAllTestResults();
});
