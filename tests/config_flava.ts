// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

export const timeout = 5000;

const config: PlaywrightTestConfig = {
    retries: 2,
    workers: 1,
    reporter: [
        [process.env.CI ? 'dot' : 'list'],
        ['html', { open: 'never' }],
        ['junit', { outputFile: 'results.xml' }]
    ],
    projects: [
        {
            name: 'acc chromium',
            use: { ...devices['Desktop Chrome'],
                viewport: { width: 1600, height: 900 },
                baseURL: !process.env.webapp ? "https://www.flava.co.nz/" : process.env.webapp
            },
        },
        // ... other projects
    ],
    use: {
        headless: true,
        ignoreHTTPSErrors: true,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
};

export default config;