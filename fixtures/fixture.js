import { test as base } from "@playwright/test";
import LoginPage from "../pages/loginpage";
import CustomerPage from "../pages/customer";

export const test = base.extend({
  loginTest: async ({ page }, use) => {
    const loginTest = new LoginPage(page);
    await use(loginTest);
  },

  customerTest: async ({ page }, use) => {
    const customerTest = new CustomerPage(page);
    await use(customerTest);
  },
});

export const expect = base.expect;
