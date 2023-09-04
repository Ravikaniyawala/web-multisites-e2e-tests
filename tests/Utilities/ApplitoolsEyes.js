const { expect, test} = require('@playwright/test');
const path = require('path');
const {Eyes,VisualGridRunner,FileLogHandler, Target, BatchInfo,BrowserType,ScreenOrientation,DeviceName,Configuration} = require('@applitools/eyes-playwright')
// const { v4: uuidv4 } = require('uuid');

// function generateRandomUUID() {
//   return uuidv4();
// }

// // Example usage
// const randomUUID = generateRandomUUID();
//console.log(randomUUID);
const Runner = new VisualGridRunner({ testConcurrency: 10 });
const Config = new Configuration();
let eyes = Eyes;
const visualTests = process.env.VISUAL_TESTS === 'true';
// process.env.VISUAL_TESTS = 'true';
const Batch = Object.freeze(new BatchInfo({name: `Radio Tests ${new Date().toISOString()}`, id: ''}));

exports.ApplitoolsEyes = class ApplitoolsEyes {

  /**
   * @param {import('@playwright/test').Page} page
   */


  async setConfig() {
    if(visualTests) {

      // Create the runner for the Ultrafast Grid.
      // Concurrency refers to the number of visual checkpoints Applitools will perform in parallel.
      // Warning: If you have a free account, then concurrency will be limited to 1.


      // Create a new batch for tests.
      // A batch is the collection of visual checkpoints for a test suite.
      // Batches are displayed in the dashboard, so use meaningful names.
      // Create a configuration for Applitools Eyes.

      // Set the batch for the config.
      await Config.setBatch(Batch);

      // Add 3 desktop browsers with different viewports for cross-browser testing in the Ultrafast Grid.
      // Other browsers are also available, like Edge and IE.
      await Config.addBrowser(1600, 1200, BrowserType.CHROME);
     // await Config.addBrowser(1600, 1200, BrowserType.FIREFOX);
      await Config.addBrowser(1024, 768, BrowserType.SAFARI);

      // Add 2 mobile emulation devices with different orientations for cross-browser testing in the Ultrafast Grid.
      // Other mobile devices are available, including iOS.
     // await Config.addDeviceEmulation(DeviceName.Pixel_2, ScreenOrientation.PORTRAIT);
      //await Config.addDeviceEmulation(DeviceName.Nexus_10, ScreenOrientation.LANDSCAPE);
      await Config.setApiKey("your api key");
      await Config.setLayoutBreakpoints(true);
      await Config.setDontCloseBatches(true);
      //await Config.setMatchTimeout(1000);
    }
  }

  async openEyes(page){
    if(visualTests) {
      eyes = new Eyes(Runner, Config);
     // eyes.setLogHandler(new FileLogHandler(true, path.resolve('logs', `eyes-${Date.now()}.log`), false))
      // Open Eyes to start visual testing.
      // Each test should open its own Eyes for its own snapshots.
      // It is a recommended practice to set all four inputs below:
      await eyes.open(
          page,                             // The Playwright page object to "watch"
          'NZME Site',                      // The name of the app under test
          test.info().title,                // The name of the test case
          {width: 1024, height: 768});
      return eyes;
    }
  }

  async eyesCheck(screenName) {
    if(visualTests) {
      await eyes.check(screenName, Target.window().fully().layout());
    }
  }
  async eyesCheckRegion(ScreenName, Region)
  {
    if(visualTests) {
      await eyes.check(ScreenName, Target.region(Region));
    }
  }

  async clAsync() {
    if(visualTests) {
      test.setTimeout(0);
      await eyes.close(false);
    }
  }



  async getAllTestResults(){
    if(visualTests) {
      test.setTimeout(0);
      const results = await Runner.getAllTestResults(false);
      console.log("Result:: "+results.getAllResults());
    }
  }
}