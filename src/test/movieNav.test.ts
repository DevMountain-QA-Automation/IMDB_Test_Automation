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
    await bp.navigate("https://www.imdb.com/title/tt9243804/?ref_=nv_sr_srsg_0");
  });
  afterAll(async () => {
    await bp.quit();
  });
  test("movie related videos navigation button", async () => {
     //it will find the video navigation arrow button and click it 
    await bp.click(bp.videoNavigationBtnRight);
     //it will select the first video after toggle and click it 
    await bp.click(bp.videoDisplay)
    let movieTitle = await bp.getText(bp.videoTitle)
     //it will get the title of the video clicked on 
    expect(movieTitle).toBe("The Green Knight (2021)")
  });
});
