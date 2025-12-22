import { test, expect } from "../fixtures/fixtures.js";
import { faker } from "@faker-js/faker";

test.describe.serial("Customer Test Cases", () => {
  let CustomerData;
  test.beforeAll(async () => {
    CustomerData = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      phoneno: faker.phone.number({ style: "international" }),
    };
  });

  test("Create Customer", async ({ customerTest, page }) => {
    await customerTest.createcustomer(CustomerData);
    await expect(
      page.getByText(CustomerData.name + " " + "saved", { exact: true })
    ).toBeVisible();
    await expect(page.locator('[id="page-List/Customer/List"]')).toContainText(
      CustomerData.name
    );
  });

  test("Update Customer", async ({ customerTest }) => {
    await customerTest.updatecustomer(CustomerData);
  });
});
