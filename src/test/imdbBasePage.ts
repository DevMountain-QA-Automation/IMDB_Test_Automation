import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";

export class imdbBasePage {
    driver: WebDriver;
    url: string = "https://www.imdb.com/?ref_=nv_home";

    // IMDb home page Menu button
    menu: By = By.css(".ipc-button__text");
    // IMDb home page Search Bar
    searchBar: By = By.id("suggestion-search");
    // IMDb search results array
    results: By = By.css(".result_text");

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate() {
        await this.driver.get(this.url);
    }

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }

    async getAttribute(elementBy: By, attribute: string) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).getAttribute(attribute);
    }

    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    }

    async getText(elementBy:any) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).getText();
    }

    async doSearch(text: string) {
        return this.sendKeys(this.searchBar, `${text}\n`);
    }

    async getResults() {
        let resultsArray = await this.driver.findElements(this.results);
        resultsArray.forEach(async (movies) => {
            return await this.getText(movies);
        })
    }
}