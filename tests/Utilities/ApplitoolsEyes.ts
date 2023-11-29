import { Page, TestInfo, test as baseTest } from '@playwright/test';
import { Eyes, VisualGridRunner, Target, BatchInfo, BrowserType, Configuration } from '@applitools/eyes-playwright';
import path from 'path';

const Runner = new VisualGridRunner({ testConcurrency: 10 });
const Config = new Configuration();
let eyes: Eyes;
const visualTests: boolean = process.env.VISUAL_TESTS === 'true';
const Batch = Object.freeze(new BatchInfo({ name: `Radio Tests ${new Date().toISOString()}`, id: '' }));

export class ApplitoolsEyes {
  async setConfig(): Promise<void> {
    if (visualTests) {
      await Config.setBatch(Batch);
      await Config.addBrowser(1600, 1200, BrowserType.CHROME);
      await Config.addBrowser(1024, 768, BrowserType.SAFARI);
      await Config.setApiKey("your api key");
      await Config.setLayoutBreakpoints(true);
      await Config.setDontCloseBatches(true);
    }
  }

  async openEyes(page: Page, testInfo: TestInfo): Promise<Eyes | undefined> {
    if (visualTests) {
      eyes = new Eyes(Runner, Config);
      await eyes.open(
          page,
          'NZME Site',
          testInfo.title,
          { width: 1024, height: 768 }
      );
      return eyes;
    }
  }

  async eyesCheck(screenName: string): Promise<void> {
    if (visualTests) {
      await eyes.check(screenName, Target.window().fully().layout());
    }
  }

  async eyesCheckRegion(screenName: string, region: string): Promise<void> {
    if (visualTests) {
      await eyes.check(screenName, Target.region(region));
    }
  }

  async clAsync(): Promise<void> {
    if (visualTests) {
      baseTest.setTimeout(0);
      await eyes.close(false);
    }
  }

  async getAllTestResults(): Promise<void> {
    if (visualTests) {
      baseTest.setTimeout(0);
      const results = await Runner.getAllTestResults(false);
      console.log("Result:: " + results.getAllResults());
    }
  }
}
