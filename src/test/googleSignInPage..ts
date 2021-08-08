import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";

export class googleSignInPage {
  driver: WebDriver;

  // email input field
  emailInputField: By = By.xpath(
    "//input[contains(@type, 'email')]"
  );
  // password input field
  passwordInputField: By = By.xpath(
    "//input[contains(@type, 'password')]"
  );


  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async insertEmail(email:string) {
    await this.driver.wait(until.elementLocated(this.emailInputField));
    await this.driver.findElement(this.emailInputField).click();
    return await this.driver.findElement(this.emailInputField).sendKeys(email)
  }

  async insertPassword(pass:string) {
    await this.driver.wait(until.elementLocated(this.passwordInputField));
    await this.driver.findElement(this.passwordInputField).click();
    return await this.driver.findElement(this.passwordInputField).sendKeys(pass)
  }


}
