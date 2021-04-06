const { chromium } = require("playwright");
const fs = require('fs');

(async () => {
    const browser = await chromium.launch({});
    const context = await browser.newContext();
    const page = await context.newPage();

    await browser.startTracing(page, {
        path: `./data/trace.json`,
        screenshots: true,
        categories: ["devtools.timeline"],
    });

    await page.goto("https://offers-staging3.affise.com/");
    await page.fill('input[name="email"]', "ivan@gmail.com");
    await page.fill('input[name="password"]', "vlad12-8");
    await page.check('input[name="sign"]');
    await page.click("text=Sign in");

    await browser.stopTracing();

    await page.close();
    await context.close();
    await browser.close();

    const traceInfo = JSON.parse(fs.readFileSync("./data/trace.json", "utf8"));
    const traceData = traceInfo.traceEvents.filter(
        (x) =>
            x.cat === "disabled-by-default-devtools.screenshot" &&
            x.name === "Screenshot" &&
            typeof x.args !== "undefined" &&
            typeof x.args.snapshot !== "undefined"
    );

    traceData.forEach(function (snap, index) {
        fs.writeFile(
            `./screenshots/trace/screenshot-${index}.png`,
            snap.args.snapshot,
            "base64",
            function (err) {
                if (err) {
                    console.log("write error", err);
                }
            }
        );
    });
})();
