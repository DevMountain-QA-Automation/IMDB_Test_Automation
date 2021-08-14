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

describe("Viewing celebrities birthday", () => {
  beforeEach(async () => {
    await bp.navigate("https://www.imdb.com/?ref_=nv_home");
  });
  afterAll(async () => {
    await bp.quit();
  });

  test("viewing of celebrity birthday", async () => {
    await bp.click(bp.menu);
    await bp.click(bp.celebs);
    await bp.click(bp.born);
    let bday = await bp.getText(bp.actor);
    expect(bday).toContain("Mãdãlina Ghenea");
  });
});
