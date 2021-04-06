const { chromium } = require("playwright");
const { PageObject } = require("./PageObject");

let browser;
let context;
let page;

before(async () => {
    browser = await chromium.launch({headless: false, slowMo: 20 });
    context = await browser.newContext();
    page = await context.newPage();
});

beforeEach(async () => {});

it("Authorization", async () => {
    const po = new PageObject(page)
    await po.open("https://offers-staging3.affise.com")
    await po.login("ivan@gmail.com", "vlad12-8")
});

afterEach(async () => {});

after(async () => {
    await page.close();
    await context.close();
    await browser.close();
});
