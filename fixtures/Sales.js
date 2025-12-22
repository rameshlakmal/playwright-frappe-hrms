import CustomerPage from "../pages/sales/customer.js";

export const salesFixtures = {
  customerTest: async ({ page }, use) => {
    await use(new CustomerPage(page));
  },
};
