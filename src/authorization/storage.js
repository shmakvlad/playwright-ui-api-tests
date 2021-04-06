const { chromium } = require("playwright");

let browser;
let context;
let page;

before(async () => {
    browser = await chromium.launch({
        headless: false,
        slowMo: 10,
    });
    context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://offers-staging3.affise.com/");
    await page.fill('input[name="email"]', "ivan@gmail.com");
    await page.fill('input[name="password"]', "vlad12-8");
    await page.check('input[name="sign"]');
    await page.click("text=Sign in");

    const storage = await context.storageState();
    process.env.STORAGE = JSON.stringify(storage);

    await page.close()
    await context.close()
});

beforeEach(async () => {
    const storageState = JSON.parse(process.env.STORAGE);
    context = await browser.newContext({storageState})
    page = await context.newPage();
});

it("Advertisers", async () => {
    await page.goto("https://offers-staging3.affise.com/advertisers");
    await page.click(".btn.btn-success.btn-xs");
});

it("Affiliates", async () => {
    await page.goto("https://offers-staging3.affise.com/partners");
    await page.click(".btn.btn-success.btn-xs");
});

afterEach(async () => {
    await page.close();
    await context.close();
});

after(async () => {
    await browser.close();
});
