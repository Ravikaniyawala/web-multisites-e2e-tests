const { expect } = require('@playwright/test');
import pageElements from '../PageElements/PageElements';
import basePage from "../../Utilities/BasePage";


exports.NewsTalkzbHomePage = class NewsTalkzbHomePage extends basePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    // this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    // this.gettingStartedHeader = page.locator('h1', { hasText: 'Getting started' });
    // this.pomLink = page.locator('li', { hasText: 'Playwright Test' }).locator('a', { hasText: 'Page Object Model' });
    // this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async gotoHomePage(baseUrl) {
    await this.page.goto(baseUrl);
    //await this.waitForPageToLoad();

     /*await this.page.goto('https://dev-www.thehits.co.nz/');
     await this.page.locator(pageElements.regionSelectionAuckland).click();*/
     
  }

  async goToOnDemandAudio(){
    await this.hoverAndClick(pageElements.onDemandHover,pageElements.onDemandAudio);
  }

  async goToOnDemandVideo(){
    await this.hoverAndClick(pageElements.onDemandHover,pageElements.onDemandVideo);
    /*console.log("pageElements.onDemandHover clicked")
    await this.forceClick(pageElements.onDemandVideo);*/
  }

  async goToOnDemandVideoMobile(){
    await this.waitAndClick(pageElements.mobileStickyMenuButton);
    await this.waitAndClick(pageElements.mobileMenuOnDemand);
    await this.waitAndClick(pageElements.mobileOnDemandVideo);
  }

  async goToOnDemandAudioMobile(){
    await this.waitAndClick(pageElements.mobileStickyMenuButton);
    await this.waitAndClick(pageElements.mobileMenuOnDemand);
    await this.waitAndClick(pageElements.mobileOnDemandAudio);
  }

  async goToArticle(){
    await this.isElementVisible(pageElements.mediaArticle);
    await this.waitAndClick(pageElements.mediaArticle);
    await this.isElementVisible(pageElements.getTheIheartAppButton);

    /*await expect(this.page.locator(pageElements.mediaArticle)).toBeVisible();
    await this.page.locator(pageElements.mediaArticle).click();
    await expect(this.page.locator(pageElements.getTheIheartAppButton)).toBeVisible();*/
  }

  async goToRelatedArticle(){
    await this.isElementVisible(pageElements.mediaArticleRelatedProduct);
    await this.waitAndClick(pageElements.mediaArticleRelatedProduct);
    await this.isElementVisible(pageElements.getTheIheartAppButton);

    /*await expect(this.page.locator(pageElements.mediaArticle)).toBeVisible();
    await this.page.locator(pageElements.mediaArticle).click();
    await expect(this.page.locator(pageElements.getTheIheartAppButton)).toBeVisible();*/
  }

  /*async verifyRegionPicker(){
    await this.isElementVisible(pageElements.headerRegionPicker);
    await this.waitAndClick(pageElements.headerRegionPicker);

    //await this.forceClick(pageElements.regionSelectionAuckland);

    await this.isElementVisible(pageElements.regionSelectedAuckland);
  }*/

  async verifyNews(){
    await this.isElementVisible(pageElements.headerNews);
    await this.waitAndHover(pageElements.headerNews);
    await this.isElementVisible(pageElements.newsTypes);
    await this.waitAndClick(pageElements.headerClose);
    await this.isElementInVisible(pageElements.newsTypes);
  }
//spliting verifyOnDemand to verifyOnDemandOpen and verifyOnDemandClose
  async verifyOnDemandOpen(){
    await this.isElementVisible(pageElements.headerOnDemand);
    await this.waitAndHover(pageElements.headerOnDemand);
    await this.isElementVisible(pageElements.onDemandTypes);
  }
  async verifyOnDemandClose(){
    await this.isElementVisible(pageElements.onDemandTypes);
    await this.waitAndClick(pageElements.headerClose);
    await this.isElementInVisible(pageElements.onDemandTypes);
  }
  async verifyPodcast(){
    await this.isElementVisible(pageElements.headerPodcasts);
    await this.waitAndHover(pageElements.headerPodcasts);
    await this.isElementVisible(pageElements.podcastType);
    await this.waitAndClick(pageElements.headerClose);
    await this.waitAndHover(pageElements.headerPodcasts);
    await this.isElementVisible(pageElements.podcastType);
    await this.waitAndClick(pageElements.podcastType);
    await this.isElementVisible(pageElements.podcastProfileHeading);
  }

  async verifyOpinion(){
    await this.isElementVisible(pageElements.headerOpinion);
    await this.waitAndClick(pageElements.headerOpinion);
    await this.isElementVisible(pageElements.opinionHeader);
    await this.isElementVisible(pageElements.latestOpinionHeader);
  }

  async verifyRegionPicker(){
    await this.isElementVisible(pageElements.headerRegionPicker);
    await this.waitAndClick(pageElements.headerRegionPicker);
    await this.waitAndClick(pageElements.regionSelectionWellington);
    await this.isElementInVisible(pageElements.regionSelectionWellington);
    await this.isElementTextVisible(pageElements.regionSelected,'Wellington 89.3 FM, 1035 AM');
  }

  async verifySearch(){
    await this.isElementVisible(pageElements.headerSearch);
    await this.waitAndClick(pageElements.headerSearch);
    await this.waitAndInput(pageElements.headerSearchInput,"test");
    await this.waitAndClick(pageElements.headerSearchClear);
    await this.waitAndClick(pageElements.headerSearch);
    await this.isElementInVisible(pageElements.headerSearchInput);
    await this.waitAndClick(pageElements.headerSearch);
    await this.waitAndInput(pageElements.headerSearchInput,"test");
    await this.pressEnter(pageElements.headerSearchInput);
    await this.isElementVisible(pageElements.searchEntriesFound);
    await this.isElementVisible(pageElements.searchResultMedia);
    await this.isElementVisible(pageElements.searchResultsHeader);
  }

  async verifyListenLive(){
    await this.isElementVisible(pageElements.headerListenLive);
    await this.waitAndClick(pageElements.headerListenLive);
    //verify action
  }

  //spliting verifyHeaderOpenClose into verifyHeaderOpen and verifyHeaderClose
  async verifyHeaderOpen(){
    await this.isElementVisible(pageElements.headerShows);
    await this.waitAndHover(pageElements.headerShows);
    await this.isElementVisible(pageElements.showTypes);
    
  }
  async verifyHeaderClose(){
    await this.waitAndClick(pageElements.headerClose);
    await this.isElementInVisible(pageElements.headerClose);
    await this.isElementInVisible(pageElements.showTypes);
  }
//spliting  verifySubNavigationItems verifyNewsSubNavigationItems and verifyNationalNavigation
  async verifyNewsSubNavigationItems(){
    await this.isElementVisible(pageElements.headerNews);
    await this.waitAndHover(pageElements.headerNews);
    await this.isElementInVisible(pageElements.headerShowsNews);
    // await this.waitAndClick(pageElements.nationalSubNavigation);
    // await this.isElementVisible(pageElements.nationalHeader);
  }
  async verifyNationalNavigation(){
    await this.waitAndClick(pageElements.nationalSubNavigation);
    await this.isElementVisible(pageElements.nationalHeader);
  }
  //spliting verifyMore into verifyMore and moreSubnavigationSubscribe

  async verifyMore(){
    await this.isElementVisible(pageElements.headerMore);
    await this.waitAndHover(pageElements.headerMore);
    await this.isElementVisible(pageElements.moreSuscribeToNewsLetter);
    
  }
  async moreSubnavigationSubscribe(){
    await this.waitAndClick(pageElements.moreSuscribeToNewsLetter);
    await this.isElementVisible(pageElements.subscribeToNewLetterHeader);
  }

  async verifyShowsSlider(){
    await this.isElementVisible(pageElements.headerShows);
      await this.waitAndHover(pageElements.headerShows);
    await this.waitAndClickWhileVisible(pageElements.headerButtonSliderNext);
    await this.isElementEnabled(pageElements.headerButtonSliderPrevious);
    await this.isElementDisaled(pageElements.headerButtonSliderNext);
    await this.waitAndClickWhileVisible(pageElements.headerButtonSliderPrevious);
    await this.isElementEnabled(pageElements.headerButtonSliderNext);
    await this.isElementDisaled(pageElements.headerButtonSliderPrevious);
    await this.waitAndClick(pageElements.earlyEditionShowSlider);
    await this.isElementVisible(pageElements.earlyEditionHeader);
  }

  async verifyLogoNavigation(){
    await this.isElementVisible(pageElements.headerLogo);
    await this.waitAndClick(pageElements.headerLogo);
    await this.isElementVisible(pageElements.headerLogo);
    await this.isElementVisible(pageElements.headerShows);
    await this.isElementVisible(pageElements.mediaArticle);
  }

  async verifyExternalLink(){

    //verify action
  }

  async verifyBlankLink(){

    //verify action
  }

  async modalClosed() {
    await this.isElementInVisible(pageElements.modalHeader);

  }

}