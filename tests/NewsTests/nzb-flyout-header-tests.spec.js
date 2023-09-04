// example.spec.js
const { test, expect } = require('@playwright/test');
const {Eyes,VisualGridRunner, Target, BatchInfo,BrowserType,ScreenOrientation,DeviceName,Configuration} = require('@applitools/eyes-playwright')
let { NewsTalkzbHomePage } = require('../PageObjects/NewsTalkZbPages/newstalkzb-home-page');
let { NewsTalkzbArticlePage } = require('../PageObjects/NewsTalkZbPages/newstalkzb-article-page');
const Runner = new VisualGridRunner({ testConcurrency: 5 });
let {ApplitoolsEyes} = require('../Utilities/ApplitoolsEyes');
let applitoolsEyes = new ApplitoolsEyes();
//let { PageElements}=require('../PageObjects/PageElements/PageElements.js');
//let pageElements=new PageElements();
import pageElements from '../PageObjects/PageElements/PageElements.js';

const visualTests = process.env.visual_Test;
const mobileTests = process.env.mobile_Test;
let newsTalkZbHomePage;
let newsTalkZbArticle;
test.beforeAll(async() => {
  await applitoolsEyes.setConfig();
});


test.describe('NZME Flyout Header Tests - NZB', () => {
  test.beforeEach(async ({ page }) => {
   // test.setTimeout(40000);
    await applitoolsEyes.openEyes(page);
    newsTalkZbHomePage = new NewsTalkzbHomePage(page);
    newsTalkZbArticle = new NewsTalkzbArticlePage(page);
  });

  test('Flyout Header-Region Picker', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
     await newsTalkZbHomePage.gotoHomePage(baseURL);
     await applitoolsEyes.eyesCheck("Home Page", Target.window().fully());
     await newsTalkZbHomePage.verifyRegionPicker();
     await applitoolsEyes.eyesCheckRegion("Region Picker", pageElements.regionSelected);
  });

  test('Flyout Header-Search', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
    await newsTalkZbHomePage.gotoHomePage(baseURL);
    await newsTalkZbHomePage.verifySearch();
    //await applitoolsEyes.eyesCheckRegion("Verify Search", pageElements.searchResultsHeader);
  });

  test('Flyout Header-Listen Live', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');

    await newsTalkZbHomePage.gotoHomePage(baseURL);
    await newsTalkZbHomePage.verifyListenLive();
    await applitoolsEyes.eyesCheckRegion("Verify Listen Live", pageElements.headerListenLive);
  });

  test('Flyout Header-Open & Close', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
     await newsTalkZbHomePage.gotoHomePage(baseURL);
     await newsTalkZbHomePage.verifyHeaderOpen();
     //await applitoolsEyes.eyesCheckRegion("Verify Header Open", pageElements.showTypes);
     await newsTalkZbHomePage.verifyHeaderClose();
    // await applitoolsEyes.eyesCheckRegion("Verify Header Close",pageElements.showTypes);


  });

  test('Flyout Header-Sub navigation items', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
        await newsTalkZbHomePage.gotoHomePage(baseURL);
        //verifySubNavigationItems splited into verifyNewsSubNavigationItems and verifyNationalNavigation
        await newsTalkZbHomePage.verifyNewsSubNavigationItems();
      //  await applitoolsEyes.eyesCheckRegion("Verify News navigation", Target.region(headerShowsNews).layout());
        await newsTalkZbHomePage.verifyNationalNavigation();
       // await applitoolsEyes.eyesCheckRegion("Verify national News-sub navigation", Target.region(nationalHeader));
        await newsTalkZbHomePage.verifyNews();
        //await applitoolsEyes.eyesCheck("Verify News", Target.window().layout());

  });

  test('Flyout Header-more flyout menu', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
     await newsTalkZbHomePage.gotoHomePage(baseURL);
     await newsTalkZbHomePage.verifyMore();
     //await applitoolsEyes.eyesCheck("Verify more", Target.region(moreSuscribeToNewsLetter).layout());
     await newsTalkZbHomePage.moreSubnavigationSubscribe();
    // await applitoolsEyes.eyesCheckRegion("Verify More-SubscribeToNewsLetter", Target.region(subscribeToNewLetterHeader).strict());


  });

  test('Flyout Header-Shows slider', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
      await newsTalkZbHomePage.gotoHomePage(baseURL);
      await newsTalkZbHomePage.verifyShowsSlider();
      await applitoolsEyes.eyesCheckRegion("Verify show slider",pageElements.headerButtonSliderNext);
  });

  test('Flyout Header-Logo navigation', async ({ page,baseURL, isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
      await newsTalkZbHomePage.gotoHomePage(baseURL);
      await newsTalkZbHomePage.verifyLogoNavigation();
     // await applitoolsEyes.eyesCheck("Flyout Header-Logo navigation");
  });

  test('Flyout Header-OnDemand', async ({ page,baseURL, isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
    await newsTalkZbHomePage.gotoHomePage(baseURL);
    await newsTalkZbHomePage.verifyOnDemandOpen();
   // await applitoolsEyes.eyesCheck("Flyout Header-OnDemand Open", Target.region(onDemandTypes).layout());
    await newsTalkZbHomePage.verifyOnDemandClose();
  });

  test('Flyout Header-Podcast', async ({ page,baseURL, isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
      await newsTalkZbHomePage.gotoHomePage(baseURL);
      await newsTalkZbHomePage.verifyPodcast();
     // await applitoolsEyes.eyesCheck("Flyout Header-Podcast");
  });

  test('Flyout Header-Opinion', async ({ page,baseURL, isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
    await newsTalkZbHomePage.gotoHomePage(baseURL);
    await newsTalkZbHomePage.verifyOpinion();
   // await applitoolsEyes.eyesCheck("Flyout Header-Opinion");
  });

  test('Flyout Header-external and blank link', async ({ page,baseURL,isMobile }) => {
    test.skip(isMobile, 'Flyout Header is only for Desktop view');
    await newsTalkZbHomePage.gotoHomePage(baseURL);
   // await applitoolsEyes.eyesCheck("Flyout Header-external and blank link");

  });

  test.afterEach(async () => {
    await applitoolsEyes.clAsync();
  });
});

test.afterAll(async() => {
  await applitoolsEyes.getAllTestResults();
});