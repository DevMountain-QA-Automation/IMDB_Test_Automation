const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

import { BasePage } from "./imdbBasePage";

const page = new BasePage(driver);

test("search something", async () => {
    await page.navigate();
    await page.doSearch("Otters");
    await page.click(page.searchItemBtn)
    expect(await page.getSearchResults()).toContain("Otters and the Exotic Pet Trade");
});

afterAll(async () => {
    await page.quit()
});


// We should return to home page with imdb logo after every test
// Make some flow charts/equivalence partitions
