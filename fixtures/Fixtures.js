import { test as base } from "@playwright/test";
import LoginPage from "../pages/loginpage.js";

export const test = base.extend({
  loginTest: async ({ page }, use) => {
    const loginTest = new LoginPage(page);
    await use(loginTest);
  },
});

export const expect = base.expect;
