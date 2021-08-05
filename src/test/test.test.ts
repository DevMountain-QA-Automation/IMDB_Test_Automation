const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

import { imdbBasePage } from "./imdbBasePage";

const page = new imdbBasePage(driver);

test("get url", async () => {
    await page.navigate();
});

test("search somefin", async () => {
    await page.doSearch("Otters and the exotic pet trade");
    expect(await page.getResults()).toContain("Otters and the exotic pet trade");
});