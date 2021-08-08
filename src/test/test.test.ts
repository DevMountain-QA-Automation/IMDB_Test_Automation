const chromedriver = require("chromedriver");
import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
import { googleSignInPage } from "./googleSignInPage.";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

import { imdbBasePage } from "./imdbBasePage";
import { imdbSignInPage } from "./imdbSignInPage";

const basePage = new imdbBasePage(driver);
const signInPage = new imdbSignInPage(driver);
const googleSignIn = new googleSignInPage(driver);

beforeEach(async () => {
  await basePage.navigate();
  await driver.manage().window().maximize();
});

afterAll(async () => {
  await basePage.quit();
});

test("can login", async () => {
  await basePage.click(basePage.signInBtn);
  expect(await driver.getCurrentUrl()).toContain('registration/signin')
  await signInPage.googleSignIn();
  expect(await driver.getCurrentUrl()).toContain('accounts.google')
  await googleSignIn.insertEmail("johndoemarydoe7@gmail.com\n");
  await googleSignIn.insertPassword("IMDB1234\n");
});

// test("search something", async () => {
//     await basePage.doSearch("Otters");
//     await basePage.click(basePage.searchItemBtn)
//     expect(await basePage.getSearchResults()).toContain("Otters and the Exotic Pet Trade");
// });
