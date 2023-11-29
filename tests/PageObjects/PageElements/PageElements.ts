class PageElements {
    // News Elements
    mediaArticle: string = 'article.article';
    getTheIheartAppButton: string = '[data-test-ui="open-modal"]';

    breadCrumb1: string = '[id="crumb-1"]';
    breadCrumb2: string = '[id="crumb-2"]';
    breadCrumb3: string = '[id="crumb-3"]';

    headerRegionPicker: string = 'header [data-test-ui="region-modal-open"]';
    regionSelectionWellington: string = '//section[@data-test-ui="region-modal"]//span[contains(text(),"Wellington")]';

    regionSelected: string = '//button[@data-test-ui="region-modal-open"]//span[contains(@class,"js-region-display-name")]';
    getTheIheartAppButtonAudio: string = '[data-test-ui="open-modal"]';

    breadCrumb1Audio: string = '[id="crumb-1"]';
    breadCrumb2Audio: string = '[id="crumb-2"]';
    breadCrumb3Audio: string = '[id="crumb-3"]';

    regionSelectionAucklandAudio: string = '//span[contains(text(),"Auckland")]';
    haurakiMediaAudio: string = 'div.pod--listing.medium.medium--primary.block-link';

    headerRegionPickerAudio: string = 'header [data-test-ui="region-modal-open"]';
    regionSelectionWellingtonAudio: string = '//section[@data-test-ui="region-modal"]//span[contains(text(),"Wellington")]';

    regionSelectedAudio: string = '//button[@data-test-ui="region-modal-open"]//span[contains(@class,"js-region-display-name")]';
}

export default new PageElements();
