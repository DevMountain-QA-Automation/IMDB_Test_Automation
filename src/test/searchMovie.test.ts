import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
import { imdbBasePage } from "./imdbBasePage";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();


const bp = new imdbBasePage(driver);

describe("Movie lookup", () => {
  
  beforeEach(() => {
    bp.navigate("https://www.imdb.com/?ref_=nv_home");
  });
  afterAll(() => {
    bp.quit();
  });

  // IMDb search movie test
  test("movie searching", async () => {
    await bp.sendKeys(bp.searchBar, "Otters");
    await bp.click(bp.searchItemBtn);
    expect(await bp.getText(bp.movieTitleView)).toContain(
      "Otters and the Exotic Pet Trade"
    );
  });
});
