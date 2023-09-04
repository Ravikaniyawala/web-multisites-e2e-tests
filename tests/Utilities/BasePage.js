const { expect } = require('@playwright/test');
export default class basePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        //wait for page to be loaded
        this.waitForPageToLoad();
    }

    async isElementVisible(pageElement) {
        await expect(this.page.locator(pageElement).first()).toBeVisible();
    }

    async isElementTextVisible(pageElement,text) {
        await expect(this.page.locator(pageElement).first()).toHaveText(text);
}

    async isMyElementEnabled(pageElement) {
        return await this.page.locator(pageElement).isEnabled();
    }

    async waitAndClickWhileVisible(pageElement){
        while (await this.isMyElementEnabled(pageElement)){
            await this.waitAndClick(pageElement);
            await this.page.waitForTimeout(1000);
        }
    }

    async waitForPageToLoad() {
        await this.page.waitForLoadState('domcontentloaded', { timeout: timeout });
    }

    async getVisibleElement(pageElement) {
        console.log(this.page.locator(pageElement));
        for (let i = 0; i < this.page.locator(pageElement).length; i++) {
            if(this.page.locator(pageElement) === true) {

                return pageElement[i];
            }else if(this.page.locator(pageElement)[i].visible === false) {


            }
        }
    }

    async isElementInVisible(pageElement) {
        await this.page.waitForTimeout(1000);
        await expect(this.page.locator(pageElement)).toBeHidden();
    }

    async isElementDisaled(pageElement) {
        await expect(this.page.locator(pageElement)).toBeDisabled();
    }

    async isElementEnabled(pageElement) {
        await expect(this.page.locator(pageElement)).toBeEnabled();
    }

    async waitForVisibility(pageElement) {
        await expect(this.page.locator(pageElement)).toBeVisible();
    }

    async waitForVisibilityFrame(pageElement) {
        await expect(frame.locator(pageElement)).toBeVisible();
    }

    async waitForElementToBeEnabled(pageElement) {
        await expect(this.page.locator(pageElement)).toBeEnabled();
    }


    async getTitle() {
        return await this.page.title();
    }



    async getUrl() {
        return this.page.url();
    }

    // wait and type for the element
    async waitAndType(Selector, text) {
        await this.page.waitForSelector(Selector);
        await this.page.click(Selector, { clickCount: 3 });
        await this.page.keyboard.press('Backspace');
        await this.page.type(Selector, text);
    }

    async waitAndHover(Selector) {
        await this.page.waitForSelector(Selector);
        await this.page.hover(Selector).catch((reason) => {
            console.error(reason.toString());
        });
    }

    // wait and click the element
    async waitAndClick(Selector) {
        await this.page.waitForSelector(Selector);
        return await this.page.click(Selector);
    }

    async waitAndInput(Selector,input) {
        await this.page.waitForSelector(Selector);
        return this.page.locator(Selector).type(input);
    }

    async pressEnter(Selector) {
        await this.page.waitForSelector(Selector);
        await this.page.locator(Selector).press("Enter");

    }

    async forceClick(Selector) {
        await this.page.click(Selector).catch((reason) => {
            console.error(reason.toString());
        });
    }

    async hoverAndClick(selector1,selector2) {
        await this.waitAndHover(selector1);
        await this.waitAndClick(selector2);
    }

    // Get text of the element
    async getText(Selector) {
        await this.page.waitForSelector(Selector);
        return await this.page.$eval(Selector, element => element.innerHTML);
    }

    // Get Count of the elements
    async getCount(Selector) {
        await this.page.waitForSelector(Selector);
        return await this.page.$$eval(Selector, elements => elements.length);
    }

}