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

describe("Logging into application", () => {
  beforeEach(async () => {
    await bp.navigate("https://www.imdb.com/?ref_=nv_home");
  });
  afterAll(async () => {
    await bp.quit();
  });

  // IMDb Google SignIn test
  test("logging in", async () => {
    await bp.click(bp.imdbHomePagesignInBtn);
    await bp.click(bp.imdbSignInBtn);
    await bp.insertEmail("johndoemarydoe7@gmail.com");
    await bp.insertPassword("IMDB1234");
    await bp.click(bp.imdbSignInNextBtn);
    expect(await bp.getText(bp.displayName)).toBe("John");
  });
});

// // IMDb search movie test
// test('photo navigation button', async () => {
//   await bp.navigate("https://www.imdb.com/title/tt9243804/?ref_=nv_sr_srsg_0")
//   await bp.click(bp.viewPhotoBtn)
//   await bp.quit()
// })
