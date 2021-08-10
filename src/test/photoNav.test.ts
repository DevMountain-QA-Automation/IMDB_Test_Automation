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

import { BasePage } from "./imdbBasePage";

const page = new BasePage(driver);

// describe('app functionality', async () =>{
//   beforeEach(() => {
//     page.navigate();
//   })
afterAll(() =>{
  page.quit()
})
test('movie navi button', async () => {
  await page.navigate('https://www.imdb.com/title/tt9243804/?ref_=nv_sr_srsg_0')
  await page.click(page.videoNavibuttonRight)
  await page.click(page.videoNavibuttonLeft)
})



  

  
