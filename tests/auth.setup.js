import { test as setup, expect } from "../fixtures/fixture";
import { Login } from "../test-data/test-data.json";

setup("User login", async ({ loginTest, page }) => {
  await loginTest.login(Login.username, Login.password);
  await expect(page).toHaveURL("http://localhost:8000/desk");
  await expect(page.locator("#page-desktop")).toMatchAriaSnapshot(`
    - link "Financial Reports Financial Reports":
      - /url: /desk/financial-reports
      - img "Financial Reports"
      - text: ""
    - img "Framework"
    - text: /Framework \\d+ Workspaces/
    - link "Accounting Accounting":
      - /url: /desk/accounting
      - img "Accounting"
      - text: ""
    - link:
      - /url: /desk/item-tax-template
    - link:
      - /url: /desk/budget
    - link:
      - /url: /desk/bank-clearance
    - link:
      - /url: /desk/subscription
    - text: Accounts
    - link "Assets Assets":
      - /url: /desk/assets
      - img "Assets"
      - text: ""
    - link "Buying Buying":
      - /url: /desk/buying
      - img "Buying"
      - text: ""
    - link "CRM CRM":
      - /url: /desk/crm
      - img "CRM"
      - text: ""
    - link "Manufacturing Manufacturing":
      - /url: /desk/manufacturing
      - img "Manufacturing"
      - text: ""
    - link "Projects Projects":
      - /url: /desk/projects
      - img "Projects"
      - text: ""
    - link "Quality Quality":
      - /url: /desk/quality
      - img "Quality"
      - text: ""
    - link "Selling Selling":
      - /url: /desk/selling
      - img "Selling"
      - text: ""
    - link "Stock Stock":
      - /url: /desk/stock
      - img "Stock"
      - text: ""
    - link "Support Support":
      - /url: /desk/support
      - img "Support"
      - text: ""
    - link "Subcontracting Subcontracting":
      - /url: /desk/subcontracting
      - img "Subcontracting"
      - text: ""
    - link "Settings Settings":
      - /url: /desk/settings
      - img "Settings"
      - text: ""
    - img "Frappe HR"
    - text: /Frappe HR \\d+ Workspaces/
    `);
  await page.context().storageState({ path: "./.auth/user.json" });
});
