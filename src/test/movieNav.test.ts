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

afterAll(() =>{
  page.quit()
})
test('movie navi button', async () => {
  await page.navigate('https://www.imdb.com/title/tt9243804/?ref_=nv_sr_srsg_0')
  // will navigate to thr given url 
  await page.click(page.videoNavibuttonRight)
  //it will find the video navigation arrow button and click it 
  await page.click(page.videoDisplay)
  //it will select the first video after toggle and click it 
  let movieTitle = await page.getText(page.videoTitle)
  //it will get the title of the video clicked on 
  expect(movieTitle).toBe("The Green Knight (2021)")
})




  

  
