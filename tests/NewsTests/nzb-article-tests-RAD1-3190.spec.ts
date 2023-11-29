// news-article-tests.spec.ts
import { test } from '@playwright/test';
import { NewsSiteBasePage } from './abstractPage/NewsSiteBasePage';
import { ApplitoolsEyes } from '../Utilities/ApplitoolsEyes';
import pageElements from '../PageObjects/PageElements/PageElements';

const applitoolsEyes = new ApplitoolsEyes();
let newsSiteBasePage: NewsSiteBasePage;

test.beforeAll(async () => {
  await applitoolsEyes.setConfig();
});

test.describe('News Article Tests', () => {
  test.beforeEach(async ({ page }) => {
    newsSiteBasePage = new NewsSiteBasePage(page);
  });

  test('Breadcrumbs', async ({ baseURL, isMobile }) => {
    test.skip(isMobile, 'Breadcrumbs is only for Desktop view');
    if (typeof baseURL === "string") {
      await newsSiteBasePage.gotoHomePage(baseURL);
      await newsSiteBasePage.goToArticle();
      await newsSiteBasePage.verifyBreadCrumbs();
      // Visual checks with Applitools
      await applitoolsEyes.eyesCheck("Breadcrumbs");
    }
  });

  test.afterEach(async () => {
    await applitoolsEyes.clAsync();
  });
});

test.afterAll(async() => {
  await applitoolsEyes.getAllTestResults();
});
