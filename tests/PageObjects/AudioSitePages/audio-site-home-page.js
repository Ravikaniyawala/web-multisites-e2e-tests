const {  } = require('@playwright/test');
import pageElements from '../PageElements/PageElements';
import basePage from "../../Utilities/BasePage";

exports.AudioSiteHomePage = class AudioHomePage extends basePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;

  }

  async gotoHomePage(baseURL) {
     console.log(baseURL);
     await this.page.goto(baseURL);
     await this.waitAndClick(pageElements.regionSelectionAucklandAudio);
     
  }

  async goToArticle(){


    await (this.isElementVisible(pageElements.haurakiMediaAudio));
    await this.waitAndClick(pageElements.haurakiMediaAudio);
    await (this.isElementVisible(pageElements.getTheIheartAppButtonAudio));
  }

  async modalClosed() {
    await (this.isElementInVisible(pageElements.modalHeaderAudio));
  }


  async goToOnDemandAudio(){
    await this.hoverAndClick(pageElements.onDemandHover,pageElements.onDemandAudioAudio);
  }

  async goToOnDemandVideo(){
    await this.hoverAndClick(pageElements.onDemandHover,pageElements.onDemandVideoAudio);

  }

  async goToArticle(){
    await this.isElementVisible(pageElements.mediaArticle);
    await this.waitAndClick(pageElements.mediaArticle);
    await this.isElementVisible(pageElements.getTheIheartAppButton);


  }

  async goToRelatedArticle(){
    await this.isElementVisible(pageElements.mediaArticleRelatedProduct);
    await this.waitAndClick(pageElements.mediaArticleRelatedProduct);
    await this.isElementVisible(pageElements.getTheIheartAppButton);


  }

  async verifyNews(){
    await this.isElementVisible(pageElements.headerNewsAudio);
    await this.waitAndHover(pageElements.headerNewsAudio);
    await this.isElementVisible(pageElements.newsTypesAudio);
    await this.waitAndClick(pageElements.headerCloseAudio);
    await this.isElementInVisible(pageElements.newsTypesAudio);
  }



  async verifyPodcast(){
    await this.isElementVisible(pageElements.headerPodcastsAudio);
    await this.waitAndHover(pageElements.headerPodcastsAudio);
    await this.isElementVisible(pageElements.podcastTypeAudio);
    await this.waitAndClick(pageElements.headerCloseAudio);
    await this.waitAndHover(pageElements.headerPodcastsAudio);
    await this.isElementVisible(pageElements.podcastTypeAudio);
    await this.waitAndClick(pageElements.podcastTypeAudio);
    await this.isElementVisible(pageElements.podcastProfileHeadingAudio);
  }

  async verifyRegionPicker(){
    await this.isElementVisible(pageElements.headerRegionPickerAudio);
    await this.waitAndClick(pageElements.headerRegionPickerAudio);
    await this.waitAndClick(pageElements.regionSelectionWellingtonAudio);
    await this.isElementInVisible(pageElements.regionSelectionWellingtonAudio);
    await this.isElementTextVisible(pageElements.regionSelectedAudio,'Wellington 90.1 FM');
  }

  async verifySearch(){
    await this.isElementVisible(pageElements.headerSearchAudio);
    await this.waitAndClick(pageElements.headerSearchAudio);
    await this.waitAndInput(pageElements.headerSearchInputAudio,"test");
    await this.waitAndClick(pageElements.headerSearchClearAudio);
    await this.waitAndClick(pageElements.headerSearchAudio);
    await this.isElementInVisible(pageElements.headerSearchInputAudio);
    await this.waitAndClick(pageElements.headerSearchAudio);
    await this.waitAndInput(pageElements.headerSearchInputAudio,"test");
    await this.pressEnter(pageElements.headerSearchInputAudio);
    await this.isElementVisible(pageElements.searchEntriesFoundAudio);
    await this.isElementVisible(pageElements.searchResultMediaAudio);
    await this.isElementVisible(pageElements.searchResultsAudio);
  }

  async verifyListenLive(){
    await this.isElementVisible(pageElements.headerListenLiveAudio);
    await this.waitAndClick(pageElements.headerListenLiveAudio);
    //verify action
  }

  async verifyHeaderOpenClose(){
    await this.isElementVisible(pageElements.headerShowsAudio);
    await this.waitAndHover(pageElements.headerShowsAudio);
    await this.isElementVisible(pageElements.showTypesAudio);
    await this.waitAndClick(pageElements.headerCloseAudio);
    await this.isElementInVisible(pageElements.headerCloseAudio);
    await this.isElementInVisible(pageElements.showTypesAudio);
  }

  async verifySubNavigationItems(){
    //update code for Listen
    await this.isElementVisible(pageElements.headerNewsAudio);
    await this.waitAndHover(pageElements.headerNewsAudio);
    await this.waitAndClick(pageElements.nationalSubNavigationAudio);
    await this.isElementVisible(pageElements.nationalHeaderAudio);
  }

  async verifyMore(){
    await this.isElementVisible(pageElements.headerMoreAudio);
    await this.waitAndHover(pageElements.headerMoreAudio);
    await this.waitAndClick(pageElements.moreSuscribeToNewsLetterAudio);
    await this.isElementVisible(pageElements.subscribeToNewLetterHeaderAudio);
  }

  async verifyShowsSlider(){
    await this.isElementVisible(pageElements.headerShowsAudio);
    await this.waitAndHover(pageElements.headerShowsAudio);
    await this.waitAndClickWhileVisible(pageElements.headerButtonSliderNextAudio);
    await this.isElementEnabled(pageElements.headerButtonSliderPreviousAudio);
    await this.isElementDisaled(pageElements.headerButtonSliderNextAudio);
    await this.waitAndClickWhileVisible(pageElements.headerButtonSliderPreviousAudio);
    await this.isElementEnabled(pageElements.headerButtonSliderNextAudio);
    await this.isElementDisaled(pageElements.headerButtonSliderPreviousAudio);
    await this.waitAndClick(pageElements.earlyEditionShowSliderAudio);
    await this.isElementVisible(pageElements.earlyEditionHeaderAudio);
  }

  async verifyLogoNavigation(){
    await this.isElementVisible(pageElements.headerLogoAudio);
    await this.waitAndClick(pageElements.headerLogoAudio);
    await this.isElementVisible(pageElements.headerLogoAudio);
    await this.isElementVisible(pageElements.headerShowsAudio);
    await this.isElementVisible(pageElements.haurakiMediaAudio);
  }

  async verifyExternalLink(){

    //verify action
  }

  async verifyBlankLink(){

    //verify action
  }
}