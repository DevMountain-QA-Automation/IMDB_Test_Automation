import { imdbBasePage } from "./imdbBasePage";
import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const bp = new imdbBasePage(driver);

describe("Navigation of movie related videos gallery", async () => {
  beforeEach(async () => {
    await bp.navigate("https://www.imdb.com/?ref_=nv_home");
  });
  afterAll(async () => {
    await bp.quit();
  });
  test("movie related videos navigation button", async () => {
    await bp.navigate("https://www.imdb.com/title/tt9243804/?ref_=nv_sr_srsg_0");
    await bp.click(bp.videoNavigationBtnRight);
    await bp.click(bp.videoNavigationBtnLeft);
  });
});
