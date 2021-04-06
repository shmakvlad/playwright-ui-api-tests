const { folio } = require("@playwright/test");
const { devices } = require("playwright");

const fixtures = folio.extend();
fixtures.contextOptions.override(async ({ contextOptions }, runTest) => {
    await runTest({
        ...contextOptions,
        ...devices["iPhone 11"]
    });
});
const { it, describe, extend } = fixtures.build();

it("Use mobile emulation", async ({ context }) => {
    const page = await context.newPage();

    await page.goto("https://offers-staging3.affise.com/");
    await page.fill('input[name="email"]', "ivan@gmail.com");
    await page.fill('input[name="password"]', "vlad12-8");
    await page.check('input[name="sign"]');
    await page.click("text=Sign in");
});
