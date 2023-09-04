const { test, expect } = require('@playwright/test');
const {Eyes,VisualGridRunner, Target, BatchInfo,BrowserType,ScreenOrientation,DeviceName,Configuration} = require('@applitools/eyes-playwright')
let { AudioSiteHomePage } = require('../PageObjects/AudioSitePages/audio-site-home-page');
let { AudioSiteArticlePage } = require('../PageObjects/AudioSitePages/audio-site-article-page');
const Runner = new VisualGridRunner({ testConcurrency: 5 });
const Config = new Configuration();
let {ApplitoolsEyes} = require('../Utilities/ApplitoolsEyes');
let applitoolsEyes = new ApplitoolsEyes();

const visualTests = process.env.visual_Test;
const mobileTests = process.env.mobile_Test;
let audioHomePage;
let audioArticlePage;
test.beforeAll(async() => {
  await applitoolsEyes.setConfig();
});


test.describe('Audio Site Flyout Header Tests', () => {
  test.skip('Tests under Development');

  test.beforeEach(async ({ page }) => {
    test.setTimeout(40000);
    await applitoolsEyes.openEyes(page);
    audioHomePage = new AudioSiteHomePage(page);
    audioArticlePage = new AudioSiteArticlePage(page);
  });

  test('Flyout Header-Region Picker', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
      await audioHomePage.gotoHomePage(baseURL);
      await audioHomePage.verifyRegionPicker();
  });

  test('Flyout Header-Search', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
    await audioHomePage.gotoHomePage(baseURL);
    await audioHomePage.verifySearch();
  });

  test('Flyout Header-Listen Live', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');

    await audioHomePage.gotoHomePage(baseURL);
    await audioHomePage.verifyListenLive();
  });

  test('Flyout Header-Open & Close', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
      await audioHomePage.gotoHomePage(baseURL);
      await audioHomePage.verifyHeaderOpenClose();


  });

  test('Flyout Header-Sub navigation items', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
      await audioHomePage.gotoHomePage(baseURL);
        await audioHomePage.verifySubNavigationItems();
    await audioHomePage.verifyNews();

  });

  test('Flyout Header-more flyout menu', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
    await audioHomePage.gotoHomePage(baseURL);
      await audioHomePage.verifyMore();


  });

  test('Flyout Header-Shows slider', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
      await audioHomePage.gotoHomePage(baseURL);
      await audioHomePage.verifyShowsSlider();
  });

  test('Flyout Header-Logo navigation', async ({ page,baseURL, isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
      await audioHomePage.gotoHomePage(baseURL);
      await audioHomePage.verifyLogoNavigation();
  });


  test('Flyout Header-Podcast', async ({ page,baseURL, isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
      await audioHomePage.gotoHomePage(baseURL);
      await audioHomePage.verifyPodcast();
  });



  test('Flyout Header-external and blank link', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
    await audioHomePage.gotoHomePage(baseURL);

  });

  // This method performs cleanup after each test.
  test.afterEach(async () => {
    await applitoolsEyes.clAsync();
  });
});

test.afterAll(async() => {
  await applitoolsEyes.getAllTestResults();
});