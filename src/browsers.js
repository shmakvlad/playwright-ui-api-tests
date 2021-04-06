const { chromium, firefox, webkit } = require("playwright");
const iPhone = devices["iPhone 11 Pro"];

(async () => {
    for (let browserType of [chromium, firefox, webkit]) {
        const browserType = await chromium.launch({
            headless: false,
            slowMo: 20,
        });
        const context = await browser.newContext({
            ...iPhone,
            viewport : { width: 1280, height: 1024 },
            permissions: ["geolocation"],
            geolocation: { latitude: 52.52, longitude: 13.39 },
            colorScheme: "dark",
            locale: "de-DE",
        });
        const page = await context.newPage();

        await page.goto("https://offers-staging3.affise.com/");
        await page.fill('input[name="email"]', "ivan@gmail.com");
        await page.fill('input[name="password"]', "vlad12-8");
        await page.check('input[name="sign"]');
        await page.click("text=Sign in");
        await page.screenshot({ path: "./screenshots/screenshot.png" });

        await page.close();
        await context.close();
        await browser.close();
    }
})();
