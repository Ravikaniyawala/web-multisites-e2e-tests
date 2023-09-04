const { expect } = require('@playwright/test');
import pageElements from '../PageElements/PageElements';
import NewsTalkzbHomePage from './newstalkzb-home-page'
import basePage from "../../Utilities/BasePage";

exports.NewsTalkzbArticlePage = class NewsTalkzbArticlePage extends basePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;

  }

  async goto() {
  }

  async openModal() {
    await this.isElementVisible(pageElements.getTheIheartAppButton);
    await this.waitAndClick(pageElements.getTheIheartAppButton);


  }

  async verifyBreadCrumbs(){
    await this.isElementVisible(pageElements.breadCrumb1);
    await this.isElementVisible(pageElements.breadCrumb2);
    await this.isElementVisible(pageElements.breadCrumb3);
  }

  async verifyDate(){
    await this.isElementVisible(pageElements.articlePublishDateTime);
  }

  async verifyTopLevelCategories(){
    await this.isElementVisible(pageElements.topLevelCategories);
  }

  async verifyCuratedRelatedArticles(){
    await this.isElementVisible(pageElements.curatedRelatedArticles);
  }

  async verifysocialSharingIcons(){
    await this.isElementVisible(pageElements.shareIcons);
    await this.isElementVisible(pageElements.shareEmail);
    await this.isElementVisible(pageElements.shareTwitter);
    await this.isElementVisible(pageElements.shareFacebook);
    await this.isElementVisible(pageElements.ShareFlipBoard);
    await this.isElementVisible(pageElements.SharePinterest);
    await this.isElementVisible(pageElements.ShareReddit);
    await this.isElementVisible(pageElements.shareWhatsApp);
  }

  async verifyCategoryComponentRelatedComponents(){
    await this.isElementVisible(pageElements.relatedArticle);
  }

  async verifyPaidArticle(){
    await this.isElementVisible(pageElements.paidArticleComponent);
  }

  async verifyVideoArticle(){
    await this.waitForVisibility(pageElements.videoPlayer);
    await this.waitForVisibility(pageElements.videoArticleHeader);
    await this.waitForVisibility(pageElements.videoArticleContent);
  }

  async verifyAudioArticle(){
    await this.isElementVisible(pageElements.audioPlayer);
  }

  async verifyModal() {
    await this.isElementVisible(pageElements.modalHeader);
    await this.isElementVisible(pageElements.modalQrCode);
  }
  async closeModal() {
    await this.waitAndClick(pageElements.modalClose);
  }

}

