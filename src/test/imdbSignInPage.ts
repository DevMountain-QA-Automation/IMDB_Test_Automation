import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
import { imdbBasePage } from "./imdbBasePage";

export class imdbSignInPage extends imdbBasePage {

  // IMDb google sign in button
  googleBtn: By = By.xpath(
    "//span[contains(@class, 'auth-sprite google-logo  retina')]"
  );

  constructor(driver: WebDriver) {
    super(driver)
  }

  async googleSignIn() {
    await this.driver.wait(until.elementLocated(this.googleBtn));
    return await this.driver.findElement(this.googleBtn).click();
  }

  async signInViewText(){
    await this.driver.wait(until.elementLocated(this.googleBtn));
    return await(await this.driver.findElement(this.googleBtn)).isDisplayed();
  }

}
