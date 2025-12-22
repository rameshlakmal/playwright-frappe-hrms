import LoginPage from "../pages/loginpage.js";

export const loginFixtures = {
  loginTest: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
};
