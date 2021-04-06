class PageObject {
    constructor(page) {
      this.page = page;
    }
    async open(url) {
        await this.page.goto(url);
    }
    async login(email, password) {
        await this.page.fill('input[name="email"]', email);
        await this.page.fill('input[name="password"]', password);
        await this.page.check('input[name="sign"]');
        await this.page.click("text=Sign in");
    }
  }

  module.exports = { PageObject };