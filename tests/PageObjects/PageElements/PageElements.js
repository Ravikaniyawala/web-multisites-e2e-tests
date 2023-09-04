class pageElements

{
//-----------------------------------------------------------------------News Elements----------------------------------------------------------------
    mediaArticle='article.article';//article.article.block-link.article--focus
    mediaArticleRelatedProduct = 'article.article.push--bottom-half';
    getTheIheartAppButton='[data-test-ui="open-modal"]';
    modalHeader='[data-test-ui="modal-header"]';
    modalQrCode='[alt=\'QR Code to download iHeart App for your device\']';
    modalClose='[data-test-ui="modal-close"]';

    breadCrumb1 = '[id="crumb-1"]';
    breadCrumb2 = '[id="crumb-2"]';
    breadCrumb3 = '[id="crumb-3"]';
    breadCrumb4 = '[id="crumb-4"]';

    breadCrumb1Text = '[id="crumb-1"] > [data-csref="breadcrumb"]';
    breadCrumb2Text = '[id="crumb-2"] > [data-csref="breadcrumb"]';
    breadCrumb3Text = '[id="crumb-3"] > [data-csref="breadcrumb"]';

    articlePublishDateTime = '.c-story-header__date.detail--inline dd[datetime] >> visible=true';

    topLevelCategories = '.o-pill__title';

    curatedRelatedArticles = '.o-arrow-list__item';//tbd

    socialShareList = '.o-share-list li';

    shareIcons = 'div[data-share-networks="apps,email,facebook,twitter,flipboard,pinterest,reddit,whatsapp"]';
    shareEmail = 'button.o-share.o-share--email.iconf-email';
    shareFacebook = 'button.o-share.o-share--facebook.iconf-facebook';
    shareTwitter = 'button.o-share.o-share--twitter.iconf-twitter';
    ShareFlipBoard = 'button.o-share.o-share--flipboard.iconf-flipboard';
    SharePinterest = 'button.o-share.o-share--pinterest.iconf-pinterest';
    ShareReddit = 'button.o-share.o-share--reddit.iconf-reddit';
    shareWhatsApp = 'button.o-share.o-share--whatsapp.iconf-whatsapp';

    relatedArticle = '.o-arrow-list__item';

    categoryComponents = 'tbd';

    paidArticleComponent = 'tbd';

    headerClose = 'button[data-track-action="menu close"] >> visible=true'

    headerRegionPicker = 'header [data-test-ui="region-modal-open"]';

    headerShows = 'header [data-track-label="Shows"] >> visible=true';
    headerShowsNews = 'header [data-track-label="News"] >> visible=true';

    showTypes = 'a.o-link-block__link >> visible=true';

    earlyEditionShowSlider = '//header//li[@data-track-label="Early Edition"]';

    earlyEditionHeader = '//h1[text()="Early Edition"]'

    headerNews = 'header [data-track-label="News"] >> visible=true';

    newsTypes = 'a[data-track-action="menu link"] >> visible=true';

    nationalSubNavigation = '[data-track-label="National"]';

    nationalHeader = '//h1[text()="National"]'

    headerLogo = 'img[src="/content/news/images/logo/NewstalkZB/ZB-2021-LOGO.svg?rmode=pad"] >> visible=true';

    headerOnDemand = 'header [data-track-label="On Demand"] >> visible=true';

    onDemandHover = 'header [data-track-label="On Demand"] >> visible=true';

    onDemandTypes = 'a[data-track-label="News on Demand"]';

    headerPodcasts = 'header [data-track-label="Podcasts"] >> visible=true';

    podcastType = '[data-track-label="News Fix"]';

    podcastProfileHeading = '//h1[text()="News Fix"]'

    headerOpinion = 'header [data-track-label="Opinion"] >> visible=true';

    opinionHeader = '//h1[text()="Opinion"]';

    latestOpinionHeader = '//h2[text()="Latest Opinion"]'

    headerMore = 'header [data-track-label="More"] >> visible=true';

    moreSuscribeToNewsLetter = '[data-track-action="menu more subscribe"]';

    subscribeToNewLetterHeader = '//h1[text()="Subscribe to our newsletter"] >> visible=true';

    headerSearch = 'header [data-track-action="search open close"]';

    headerSearchInput = 'input#site-search';

    searchResultMedia = 'div.search-page__media';

    searchResultsHeader = '//h1[text()="Search Results"]'

    searchEntriesFound = 'p.search-page__result-text';

    headerSearchClear = 'button[data-track-action="search clear text"]';

    headerListenLive = 'header [data-test-ui="listen-live-link"] >> visible=true';

    headerButtonSliderNext = 'button[data-track-action="menu slider next"] >> visible=true';

    headerButtonSliderPrevious = 'button[data-track-action="menu slider previous"] >>   visible=true'

    mobileStickyMenuButton = '[data-test-ui="sticky-menu-button"]';

    mobileMenuOnDemand = '(//ul[@class="off-canvas-list off-canvas-links js-mobile-menu-list"]//a[contains(text(),"On Demand")]) >> visible=true';

    mobileOnDemandVideo = '(//ul[@class="off-canvas-list off-canvas-links js-mobile-menu-list"]//a[contains(@href,"/on-demand/video/")]) >> visible=true';

    mobileOnDemandAudio = '(//ul[@class="off-canvas-list off-canvas-links js-mobile-menu-list"]//a[contains(@href,"/on-demand/audio/")]) >> visible=true';

    onDemandAudio = 'a[data-track-label="Audio"]'

    onDemandVideo = 'a[data-track-label="Video"]'

    videoPlayer = 'div[data-video-type="embed"]';

    videoPlayButton = 'button.vjs-big-play-button';

    videoArticleHeader = 'h1.c-story-header__title.ts-page-heading >> visible=true';

    videoArticleTitle = 'div.vjs-dock-title';

    videoArticleDescription = 'div.vjs-dock-description';

    videoArticleContent = '[data-component="article-content"]';

    audioPlayer = 'div.o-figure__media.player.player--audio';

    modalQrCodeHauraki = '[src="/content/music/dist/svg/qrcodes/download-iheart-hau.6d54aafce5b268561ab8c5484da7cb8f.svg"]';
    regionSelectionClose = '[data-test-ui="region-modal-close"]';
    regionOptions = '[data-test-ui="region-radio-option"]';
    regionSelectionAuckland='input[data-track-label="Auckland"]';

    regionSelectionWellington='//section[@data-test-ui="region-modal"]//span[contains(text(),"Wellington")]';

    regionSelectedAuckland='//button[@data-test-ui="region-modal-open"]//span[contains(@class,"js-region-display-name")]';

    regionSelected='//button[@data-test-ui="region-modal-open"]//span[contains(@class,"js-region-display-name")]';

    haurakiMedia='div.pod--listing.medium.medium--primary.block-link';
//-----------------------------------------------------------------------Music Elements----------------------------------------------------------------
    mediaArticleAudio='article.article';//article.article.block-link.article--focus
    mediaArticleRelatedProductAudio = 'article.article.push--bottom-half';
    getTheIheartAppButtonAudio ='[data-test-ui="open-modal"]';
    modalHeaderAudio ='[data-test-ui="modal-header"]';
    modalQrCodeAudio ='[alt=\'QR Code to download iHeart App for your device\']';
    modalCloseAudio ='[data-test-ui="modal-close"]';

    breadCrumb1Audio = '[id="crumb-1"]';
    breadCrumb2Audio = '[id="crumb-2"]';
    breadCrumb3Audio = '[id="crumb-3"]';
    breadCrumb4Audio = '[id="crumb-4"]';

    breadCrumb1TextAudio = '[id="crumb-1"] > [data-csref="breadcrumb"]';
    breadCrumb2TextAudio = '[id="crumb-2"] > [data-csref="breadcrumb"]';
    breadCrumb3TextAudio = '[id="crumb-3"] > [data-csref="breadcrumb"]';

    articlePublishDateTimeAudio = 'dl[data-component="article-date"] dd';

    topLevelCategoriesAudio = '.o-pill__title';

    curatedRelatedArticlesAudio = 'ol.listing--related.grid.content--secondary-reverse';//tbd

    socialShareListAudio = '.o-share-list li';

    shareIconsAudio = 'div[data-share-networks="apps,email,facebook,twitter,flipboard,pinterest,reddit,whatsapp"]';
    shareEmailAudio = 'button.o-share.o-share--email.iconf-email';
    shareFacebookAudio = 'button.o-share.o-share--facebook.iconf-facebook';
    shareTwitterAudio = 'button.o-share.o-share--twitter.iconf-twitter';
    ShareFlipBoardAudio = 'button.o-share.o-share--flipboard.iconf-flipboard';
    SharePinterestAudio = 'button.o-share.o-share--pinterest.iconf-pinterest';
    ShareRedditAudio = 'button.o-share.o-share--reddit.iconf-reddit';
    shareWhatsAppAudio = 'button.o-share.o-share--whatsapp.iconf-whatsapp';

    relatedArticleAudio = 'ol.listing--related.grid.content--secondary-reverse';

    categoryComponentsAudio = 'tbd';

    paidArticleComponentAudio = 'tbd';

    onDemandHoverAudio = '(//a[@data-track-label="On Demand"])[1]';

    mobileStickyMenuButtonAudio = '[data-test-ui="sticky-menu-button"]';

    mobileMenuOnDemandAudio = '(//ul[@class="off-canvas-list off-canvas-links js-mobile-menu-list"]//a[contains(text(),"On Demand")]) >> visible=true';

    mobileOnDemandVideoAudio = '(//ul[@class="off-canvas-list off-canvas-links js-mobile-menu-list"]//a[contains(@href,"/on-demand/video/")]) >> visible=true';

    mobileOnDemandAudioAudio = '(//ul[@class="off-canvas-list off-canvas-links js-mobile-menu-list"]//a[contains(@href,"/on-demand/audio/")]) >> visible=true';

    onDemandAudioAudio = 'a[data-track-label="Audio"]';

    onDemandVideoAudio = 'a[data-track-label="Video"]';

    videoPlayerAudio = 'div[data-video-type="embed"]';

    videoPlayButtonAudio = 'button.vjs-big-play-button';

    videoArticleHeaderAudio = 'h1.c-story-header__title.ts-page-heading >> visible=true';

    videoArticleTitleAudio = 'div.vjs-dock-title';

    videoArticleDescriptionAudio = 'div.vjs-dock-description';

    videoArticleContentAudio = '[data-component="article-content"]';

    audioPlayerAudio = 'div.o-figure__media.player.player--audio';

    modalQrCodeHaurakiAudio = '[src="/content/music/dist/svg/qrcodes/download-iheart-hau.6d54aafce5b268561ab8c5484da7cb8f.svg"]';
    regionSelectionCloseAudio = '[data-test-ui="region-modal-close"]';
    regionOptionsAudio = '[data-test-ui="region-radio-option"]';
    regionSelectionAucklandAudio='//span[contains(text(),"Auckland")]';

    haurakiMediaAudio='div.pod--listing.medium.medium--primary.block-link';

    headerNewsAudio = 'header [data-track-label="Listen"] >> visible=true';

    newsTypesAudio = 'a[data-track-action="menu link"] >> visible=true';

    nationalSubNavigationAudio = '[data-track-label="Frequencies"]';

    nationalHeaderAudio = '//h1[text()="Frequencies"]';

    headerLogoAudio = 'img[src="/content/music/images/interface/logo/site/ClassicHits/thehits--black.svg?rmode=pad"] >> visible=true';

    headerOnDemandAudio = 'header [data-track-label="On Demand"] >> visible=true';

    onDemandHoverAudio = 'header [data-track-label="On Demand"] >> visible=true';

    onDemandTypesAudio = 'a[data-track-label="News on Demand"]';

    headerPodcastsAudio = 'header [data-track-label="Podcasts"] >> visible=true';

    podcastTypeAudio = '[data-track-label="Jono & Ben - The Podcast"]';

    podcastProfileHeadingAudio = '//h1[text()="Jono & Ben - The Podcast"]';

    headerOpinionAudio = 'header [data-track-label="Opinion"] >> visible=true';

    opinionHeaderAudio = '//h1[text()="Opinion"]';

    latestOpinionHeaderAudio = '//h2[text()="Latest Opinion"]';

    headerMoreAudio = 'header [data-track-label="More"] >> visible=true';

    moreSuscribeToNewsLetterAudio = '[data-track-action="menu more subscribe"]';

    subscribeToNewLetterHeaderAudio = '//h1[contains(text(),"Subscribe To Our Newsletter")] >> visible=true';

    headerSearchAudio = 'header [data-track-action="search open close"]';

    headerSearchInputAudio = 'input#site-search';

    searchResultMediaAudio = 'div.gsc-results.gsc-webResult';

    searchResultsAudio = 'div.gsc-thumbnail-inside';

    searchEntriesFoundAudio = 'div.gsc-result-info';

    headerSearchClearAudio = 'button[data-track-action="search clear text"]';

    headerListenLiveAudio = 'span.c-listen-link__icon';

    headerButtonSliderNextAudio = 'button[data-track-action="menu slider next"] >> visible=true';

    headerButtonSliderPreviousAudio = 'button[data-track-action="menu slider previous"] >>   visible=true';


    headerCloseAudio = 'button[data-track-action="menu close"] >> visible=true';

    headerRegionPickerAudio = 'header [data-test-ui="region-modal-open"]';

    headerShowsAudio = 'header [data-track-label="Shows"] >> visible=true';

    showTypesAudio = 'a.o-link-block__link >> visible=true';

    earlyEditionShowSliderAudio = '//header//li[@data-track-label="Early Edition"]';

    earlyEditionHeaderAudio = '//h1[text()="Early Edition"]';

    regionSelectionWellingtonAudio='//section[@data-test-ui="region-modal"]//span[contains(text(),"Wellington")]';

    regionSelectedAucklandAudio='//button[@data-test-ui="region-modal-open"]//span[contains(@class,"js-region-display-name")]';

    regionSelectedAudio='//button[@data-test-ui="region-modal-open"]//span[contains(@class,"js-region-display-name")]';
}

export default new pageElements();