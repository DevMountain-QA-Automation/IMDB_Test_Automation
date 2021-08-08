const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

import { BasePage } from "./imdbBasePage";

const page = new BasePage(driver);

test("celeb birthday", async () => {
    await page.navigate();
    await page.click(page.menu);
    await page.click(page.celebs);
    await page.click(page.born);
    let bday = await page.getText(page.actor);
    expect(bday).toContain("Mãdãlina Ghenea");
});

afterAll(async () => {
    await page.quit()
});