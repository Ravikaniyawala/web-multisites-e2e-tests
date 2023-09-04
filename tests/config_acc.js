// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const { devices } = require('@playwright/test');
export const timeout = 5000;
const config = {
    retries: 2,
    workers:1,
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
                baseURL: !process.env.webapp ? "https://www.theaccnz.com/" : process.env.webapp},
        },
        {
            name: 'acc firefox',
            use: { ...devices['Desktop Firefox'],
                viewport: { width: 1600, height: 900 },
                baseURL: !process.env.webapp ? "https://www.theaccnz.com/" : process.env.webapp},
        },
        {
            name: 'acc webkit',
            use: { ...devices['Desktop Safari'] ,
                viewport: { width: 1600, height: 900 },
                baseURL: !process.env.webapp ? "https://www.theaccnz.com/" : process.env.webapp},
        },{
            name: 'acc iPad Pro 11',
            use: { ...devices['iPad Pro 11']
                /*viewport: { width: 1024, height: 1366 }*/,
                baseURL: !process.env.webapp ? "https://www.theaccnz.com/" : process.env.webapp},
        },{
            name: 'acc iPhone 13',
            use: { ...devices['iPhone 13'],
                baseURL: !process.env.webapp ? "https://www.theaccnz.com/" : process.env.webapp,
                /*viewport: { width: 1024, height: 1366 }*/}
        },{
            name: 'acc Pixel 5',
            use: { ...devices['Pixel 5'],
                baseURL: !process.env.webapp ? "https://www.theaccnz.com/" : process.env.webapp,
                /*viewport: { width: 1024, height: 1366 }*/},
        },{
            name: 'acc iPhone 12 Pro Max',
            use: { ...devices['iPhone 12 Pro Max'],
                baseURL: !process.env.webapp ? "https://www.theaccnz.com/" : process.env.webapp,
                /*viewport: { width: 1024, height: 1366 }*/},
        },{
            name: 'acc Galaxy S9+',
            use: { ...devices['Galaxy S9+'],
                baseURL: !process.env.webapp ? "https://www.theaccnz.com/" : process.env.webapp,
                /*viewport: { width: 1024, height: 1366 }*/},
        },
    ],
    use: {
        headless: true,
        ignoreHTTPSErrors: true,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
};

module.exports = config;