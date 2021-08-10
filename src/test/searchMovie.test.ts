const chromedriver = require("chromedriver");
import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

import { imdbBasePage } from "./imdbBasePage";

const bp = new imdbBasePage(driver);

test("searching for a movie", () => {
  
  beforeEach(() => {
    bp.navigate("https://www.imdb.com/?ref_=nv_home");
  });
  afterAll(() => {
    bp.quit();
  });

  // IMDb search movie test
  test("search for movie", async () => {
    await bp.sendKeys(bp.searchBar, "Otters");
    await bp.click(bp.searchItemBtn);
    expect(await bp.getText(bp.movieTitleView)).toContain(
      "Otters and the Exotic Pet Trade"
    );
  });
});
