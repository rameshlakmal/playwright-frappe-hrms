import { test as base } from "@playwright/test";
import CustomerPage from "../pages/Sales/Customer.js";

export const test = base.extend({
  customerTest: async ({ page }, use) => {
    const customerTest = new CustomerPage(page);
    await use(customerTest);
  },
});

export const expect = base.expect;
