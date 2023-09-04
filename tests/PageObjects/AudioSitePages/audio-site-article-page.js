const {  } = require('@playwright/test');
import pageElements from '../PageElements/PageElements';
let { AudioSiteHomePage } = require('./audio-site-home-page');
import basePage from "../../Utilities/BasePage";


exports.AudioSiteArticlePage = class AudioArticlePage extends basePage{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;

  }


  async openModal() {
    await (this.isElementVisible(pageElements.getTheIheartAppButtonAudio));
    await this.waitAndClick(pageElements.getTheIheartAppButtonAudio);
  }

  async verifyModal() {
    await (this.isElementVisible(pageElements.modalHeaderAudio));
    await (this.isElementVisible(pageElements.modalQrCodeAudio));
  }

  async closeModal() {
    await this.waitAndClick(pageElements.modalCloseAudio);
  }


  async verifyBreadCrumbs(){
    await (this.isElementVisible(pageElements.breadCrumb1Audio));
    await (this.isElementVisible(pageElements.breadCrumb2Audio));
    await (this.isElementVisible(pageElements.breadCrumb3Audio));
  }

  async verifyDate(){
    await (this.isElementVisible(pageElements.articlePublishDateTimeAudio));
  }

  async verifyTopLevelCategories(){
    await (this.isElementVisible(pageElements.topLevelCategoriesAudio));
  }

  async verifyCuratedRelatedArticles(){
    await (this.isElementVisible(pageElements.curatedRelatedArticlesAudio));
  }

  async verifysocialSharingIcons(){
    await (this.isElementVisible(pageElements.shareIconsAudio));
    await (this.isElementVisible(pageElements.shareEmailAudio));
    await (this.isElementVisible(pageElements.shareTwitterAudio));
    await (this.isElementVisible(pageElements.shareFacebookAudio));
    await (this.isElementVisible(pageElements.ShareFlipBoardAudio));
    await (this.isElementVisible(pageElements.SharePinterestAudio));
    await (this.isElementVisible(pageElements.ShareRedditAudio));
    await (this.isElementVisible(pageElements.shareWhatsAppAudio));
  }

  async verifyCategoryComponentRelatedComponents(){
    await (this.isElementVisible(pageElements.relatedArticleAudio));
  }

  async verifyPaidArticle(){
    await (this.isElementVisible(pageElements.paidArticleComponentAudio));
  }

  async verifyVideoArticle(){
    await this.waitForVisibility(pageElements.videoPlayerAudio);
    await this.waitForVisibility(pageElements.videoArticleHeaderAudio);
    await this.waitForVisibility(pageElements.videoArticleContentAudio);
  }

  async verifyAudioArticle(){
    await (this.isElementVisible(pageElements.audioPlayerAudio));
  }

}