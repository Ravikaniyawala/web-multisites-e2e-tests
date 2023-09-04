const { test, expect } = require('@playwright/test');
const {Eyes,VisualGridRunner, Target, BatchInfo,BrowserType,ScreenOrientation,DeviceName,Configuration} = require('@applitools/eyes-playwright')
let { NewsTalkzbHomePage } = require('../PageObjects/NewsTalkZbPages/newstalkzb-home-page');
let { NewsTalkzbArticlePage } = require('../PageObjects/NewsTalkZbPages/newstalkzb-article-page');
const Runner = new VisualGridRunner({ testConcurrency: 5 });
let {ApplitoolsEyes} = require('../Utilities/ApplitoolsEyes');
let applitoolsEyes = new ApplitoolsEyes();

const visualTests = process.env.visual_Test;
const mobileTests = process.env.mobile_Test;
let newsTalkZbHomePage;
let newsTalkZbArticle;
test.beforeAll(async() => {
  await applitoolsEyes.setConfig();
});


test.describe('News Article Tests', () => {

  test.beforeEach(async ({ page }) => {
    await applitoolsEyes.openEyes(page);
     newsTalkZbHomePage = new NewsTalkzbHomePage(page);
     newsTalkZbArticle = new NewsTalkzbArticlePage(page);
  });

  test('Breadcrumbs', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Breadcrumbs is only for Desktop view');
      await newsTalkZbHomePage.gotoHomePage(baseURL);
      await applitoolsEyes.eyesCheck("HomePage");
      await newsTalkZbHomePage.goToArticle();
      await applitoolsEyes.eyesCheck("ArticlePage");
      await newsTalkZbArticle.verifyBreadCrumbs();
      await applitoolsEyes.eyesCheck("BreadCrumbs");
  });

  test('DateTime', async ({ page,baseURL }) => {
    await newsTalkZbHomePage.gotoHomePage(baseURL);
    await newsTalkZbHomePage.goToArticle();
    await newsTalkZbArticle.verifyDate();
    await applitoolsEyes.eyesCheck("Date");
    //await applitoolsEyes.eyesCheck("Date",Target.Region(articlePublishDateTime).strict());
  });

  test('SocialSharing Icon', async ({ page,baseURL }) => {
    await newsTalkZbHomePage.gotoHomePage(baseURL);
    await newsTalkZbHomePage.goToArticle();
    await newsTalkZbArticle.verifysocialSharingIcons();
    await applitoolsEyes.eyesCheck("SocialSharing");
  });

  test('OnDemand Video articles', async ({ page,baseURL,isMobile }) => {
    if (isMobile) {
      await newsTalkZbHomePage.gotoHomePage(baseURL);
      await newsTalkZbHomePage.goToOnDemandVideoMobile();
      await newsTalkZbHomePage.goToArticle();
      await newsTalkZbArticle.verifyVideoArticle();}
    else{
      await newsTalkZbHomePage.gotoHomePage(baseURL);
      await newsTalkZbHomePage.goToOnDemandVideo();
      await newsTalkZbHomePage.goToArticle();
      await newsTalkZbArticle.verifyVideoArticle();
    }

  });

  test('OnDemand Audio articles', async ({ page,baseURL,isMobile }) => {
    if (isMobile) {
      await newsTalkZbHomePage.gotoHomePage(baseURL);
      await newsTalkZbHomePage.goToOnDemandAudioMobile();
      await newsTalkZbHomePage.goToArticle();
      await newsTalkZbArticle.verifyAudioArticle();}
    else {
      await newsTalkZbHomePage.gotoHomePage(baseURL);
      await newsTalkZbHomePage.goToOnDemandAudio();
      await newsTalkZbHomePage.goToArticle();
      await newsTalkZbArticle.verifyAudioArticle();
    }
  });

  test('Related articles', async ({ page,baseURL }) => {

    await newsTalkZbHomePage.gotoHomePage(baseURL);
    await newsTalkZbHomePage.goToRelatedArticle();
    await newsTalkZbArticle.verifyCategoryComponentRelatedComponents();
  });

  test('Curated Related articles', async ({ page,baseURL }) => {

    await newsTalkZbHomePage.gotoHomePage(baseURL);
    await newsTalkZbHomePage.goToRelatedArticle();
    await newsTalkZbArticle.verifyCuratedRelatedArticles();
  });

  test('App Download Modal test on articles', async ({ page,baseURL, isMobile }) => {

    await newsTalkZbHomePage.gotoHomePage(baseURL);
    await newsTalkZbHomePage.goToArticle();
    await newsTalkZbArticle.openModal();

    if(!isMobile) {
      await newsTalkZbArticle.verifyModal();
      await applitoolsEyes.eyesCheck('Test');
      await newsTalkZbArticle.closeModal();
      await newsTalkZbHomePage.modalClosed();
    }
  });

  test.afterEach(async ({ page }) => {
    await applitoolsEyes.clAsync();
  });
});

test.afterAll(async() => {
  //await applitoolsEyes.getAllTestResults();
});