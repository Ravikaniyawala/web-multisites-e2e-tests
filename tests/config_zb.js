// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const { devices } = require('@playwright/test');
export const timeout = 30000;
const config = {
    retries: 0,
    workers:4,
    timeout:30000,
    reporter: [
        ['list', { printSteps: true }],
        ['html', { open: 'never' }],
        ['junit', { outputFile: 'results.xml' }]
    ],
    projects: [
        {
            name: 'ZB chromium',
            use: { ...devices['Desktop Chrome'],
                viewport: { width: 1600, height: 900 },
                headless: true,
                baseURL: !process.env.webapp ? "https://www.newstalkzb.co.nz/" : process.env.webapp},
        }/*,
        {
            name: 'ZB firefox',
            use: { ...devices['Desktop Firefox'],
                viewport: { width: 1600, height: 900 },
                baseURL: !process.env.webapp ? "https://www.newstalkzb.co.nz/" : process.env.webapp },
        },
        {
            name: 'ZB webkit',
            use: { ...devices['Desktop Safari'] ,
                viewport: { width: 1600, height: 900 },
                baseURL: !process.env.webapp ? "https://www.newstalkzb.co.nz/" : process.env.webapp},
        },{
            name: 'ZB iPad Pro 11',
            use: { ...devices['iPad Pro 11'],
            baseURL: !process.env.webapp ? "https://www.newstalkzb.co.nz/" : process.env.webapp},
        },{
            name: 'ZB iPhone 13',
            use: { ...devices['iPhone 13'],
                baseURL: !process.env.webapp ? "https://www.newstalkzb.co.nz/" : process.env.webapp,
                }
        },{
            name: 'ZB Pixel 5',
            use: { ...devices['Pixel 5'],
                baseURL: !process.env.webapp ? "https://www.newstalkzb.co.nz/" : process.env.webapp,
                },
        },{
            name: 'ZB iPhone 12 Pro Max',
            use: { ...devices['iPhone 12 Pro Max'],
                baseURL: !process.env.webapp ? "https://www.newstalkzb.co.nz/" : process.env.webapp,
                },
        },{
            name: 'ZB Galaxy S9+',
            use: { ...devices['Galaxy S9+'],
                baseURL: !process.env.webapp ? "https://www.newstalkzb.co.nz/" : process.env.webapp,
                },
        },*/
    ],
    use: {
        headless: true,
        ignoreHTTPSErrors: true,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
};

module.exports = config;