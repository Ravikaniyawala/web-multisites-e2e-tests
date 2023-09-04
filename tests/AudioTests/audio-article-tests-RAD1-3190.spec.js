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


test.describe('Audio Article Tests', () => {

    test.beforeEach(async ({ page }) => {
        test.setTimeout(40000);
        await applitoolsEyes.openEyes(page);
        audioHomePage = new AudioSiteHomePage(page);
        audioArticlePage = new AudioSiteArticlePage(page);
    });

    test('Breadcrumbs', async ({ page,baseURL,isMobile }) => {
        if (!isMobile) {
            await audioHomePage.gotoHomePage(baseURL);
            await audioHomePage.goToArticle();
            await audioArticlePage.verifyBreadCrumbs();
        }
    });

    test('DateTime', async ({ page,baseURL }) => {
        await audioHomePage.gotoHomePage(baseURL);
        await audioHomePage.goToArticle();
        await audioArticlePage.verifyDate();
        await applitoolsEyes.eyesCheckRegion("Verify Date", articlePublishDateTimeAudio);
    });
    

    test('SocialSharing Icon', async ({ page,baseURL }) => {

        await audioHomePage.gotoHomePage(baseURL);
        await audioHomePage.goToArticle();
        await audioArticlePage.verifysocialSharingIcons();
    });

    test('Related articles', async ({ page,baseURL }) => {

        await audioHomePage.gotoHomePage(baseURL);
        await audioHomePage.goToArticle();
        await audioArticlePage.verifyCategoryComponentRelatedComponents();
    });

    test('Curated Related articles', async ({ page,baseURL }) => {

        await audioHomePage.gotoHomePage(baseURL);
        await audioHomePage.goToArticle();
        await audioArticlePage.verifyCuratedRelatedArticles();
    });

    test('App Download Modal test on articles', async ({ page,baseURL, isMobile }) => {

        await audioHomePage.gotoHomePage(baseURL);
        await audioHomePage.goToArticle();
        await audioArticlePage.openModal();

        if(!isMobile) {
            await audioArticlePage.verifyModal();
            await applitoolsEyes.eyesCheck('Test');
            await audioArticlePage.closeModal();
            await audioHomePage.modalClosed();
        }
    });

    // This method performs cleanup after each test.
    test.afterEach(async ({page}) => {
        await applitoolsEyes.clAsync();
    });

});

test.afterAll(async() => {
    await applitoolsEyes.getAllTestResults();
});