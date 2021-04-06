const { chromium } = require("playwright");

let browser;
let context;
let page;

before(async () => {
    browser = await chromium.launch({
        headless: false,
        slowMo: 20,
    });
    context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://offers-staging3.affise.com/");
    await page.fill('input[name="email"]', "ivan@gmail.com");
    await page.fill('input[name="password"]', "vlad12-8");
    await page.check('input[name="sign"]');
    await page.click("text=Sign in");
});

beforeEach(async () => {});

it("Advertisers", async () => {
    await page.goto("https://offers-staging3.affise.com/advertisers");
});

it("Affiliates", async () => {
    await page.goto("https://offers-staging3.affise.com/partners");
});

afterEach(async () => {});

after(async () => {
    await page.close();
    await context.close();
    await browser.close();
});
