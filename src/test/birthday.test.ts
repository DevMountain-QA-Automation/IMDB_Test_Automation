const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

import { BasePage } from "./imdbBasePage";

const page = new BasePage(driver);

// Function lists celebrity born on current date
test("celeb birthday", async () => {
    // Navigates to IMDb home page
    await page.navigate();
    // Locates and pulls up drop down menu
    await page.click(page.menu);
    // Locates Celebs category
    await page.click(page.celebs);
    // Clicks Born Today button
    await page.click(page.born);
    let bday = await page.getText(page.actor);
    // Verifies our actor on list
    expect(bday).toContain("Anna Kendrick");
});

afterAll(async () => {
    await page.quit()
});
