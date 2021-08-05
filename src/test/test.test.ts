const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

import { imdbBasePage } from "./imdbBasePage";

const page = new imdbBasePage(driver);

describe('app functionality', async () =>{
    beforeEach(()=>{
        page.navigate();
    })
    afterAll(()=>{
        page.quit()
    })

    test("search something", async () => {
        await page.doSearch("Otters");
        await page.click(page.searchItemBtn)
        expect(await page.getSearchResults()).toContain("Otters and the Exotic Pet Trade");
    });
})
