const { chromium } = require("playwright");
const { expect } = require("chai");

(async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 20,
        devtools: true
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://offers-staging3.affise.com/");
    await page.fill('input[name="email"]', "ivan@gmail.com");
    await page.fill('input[name="password"]', "vlad12-8");
    await page.check('input[name="sign"]');

    await page.click("text=Sign in");

    await page.close();
    await context.close();
    await browser.close();
})();
