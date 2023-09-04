// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const { devices } = require('@playwright/test');
export const timeout = 10000;
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
            name: 'Hauraki chromium',
            use: { ...devices['Desktop Chrome'],
                viewport: { width: 1600, height: 900 },
                baseURL: !process.env.webapp ? "https://www.hauraki.co.nz/" : process.env.webapp},
        },
        {
            name: 'Hauraki firefox',
            use: { ...devices['Desktop Firefox'],
                viewport: { width: 1600, height: 900 },
                baseURL: !process.env.webapp ? "https://www.hauraki.co.nz/" : process.env.webapp },
        },
        {
            name: 'Hauraki webkit',
            use: { ...devices['Desktop Safari'] ,
                viewport: { width: 1600, height: 900 },
                baseURL: !process.env.webapp ? "https://www.hauraki.co.nz/" : process.env.webapp},
        },{
            name: 'Hauraki iPad Pro 11',
            use: { ...devices['iPad Pro 11'],
                baseURL: !process.env.webapp ? "https://www.hauraki.co.nz/" : process.env.webapp},
        },{
            name: 'Hauraki iPhone 13',
            use: { ...devices['iPhone 13'],
                baseURL: !process.env.webapp ? "https://www.hauraki.co.nz/" : process.env.webapp,
            }
        },{
            name: 'Hauraki Pixel 5',
            use: { ...devices['Pixel 5'],
                baseURL: !process.env.webapp ? "https://www.hauraki.co.nz/" : process.env.webapp,
            },
        },{
            name: 'Hauraki iPhone 12 Pro Max',
            use: { ...devices['iPhone 12 Pro Max'],
                baseURL: !process.env.webapp ? "https://www.hauraki.co.nz/" : process.env.webapp,
            },
        },{
            name: 'Hauraki Galaxy S9+',
            use: { ...devices['Galaxy S9+'],
                baseURL: !process.env.webapp ? "https://www.hauraki.co.nz/" : process.env.webapp,
            },
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