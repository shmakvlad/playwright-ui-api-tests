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
});

beforeEach(async () => {});

it("Events", async () => {
    await page.goto("https://offers-staging3.affise.com/");
    await page.fill('input[name="email"]', "ivan@gmail.com");
    await page.fill('input[name="password"]', "vlad12-8");
    await page.check('input[name="sign"]');
    await page.click("text=Sign in");

    await page.on("pageerror", (pageError) => {
        console.log(`Page errors: "${pageError}`);
    });

    await page.on("requestfailed", (requestFailed) => {
        console.log(`Request errors: "${requestFailed.url()}`);
    });
});

afterEach(async () => {});

after(async () => {
    await page.close();
    await context.close();
    await browser.close();
});
