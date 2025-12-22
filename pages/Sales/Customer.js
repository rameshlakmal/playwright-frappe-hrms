export default class CustomerPage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
  }

  async createcustomer({ name, email, phoneno }) {
    await this.page.goto("/desk");
    await this.page.getByRole("link", { name: "Selling Selling" }).click();
    await this.page.getByRole("link", { name: "Customer" }).first().click();
    await this.page.getByRole("button", { name: "Add Customer" }).click();
    await this.page.getByRole("dialog").getByRole("textbox").fill(name);
    await this.page.locator("select").selectOption("Individual");
    await this.page.getByText("Primary Contact Details").click();
    await this.page.getByRole("textbox").nth(3).fill(email);
    await this.page.getByRole("textbox").nth(4).fill(phoneno);
    await this.page.getByRole("button", { name: "Save", exact: true }).click();
    await this.page.waitForURL("http://localhost:8000/desk/customer");
  }

  async updatecustomer({ name }) {
    await this.page.goto("/desk");
    await this.page.getByRole("link", { name: "Selling Selling" }).click();
    await this.page.getByRole("link", { name: "Customer" }).first().click();
    await this.page.getByRole("link", { name }).click();
  }
}
