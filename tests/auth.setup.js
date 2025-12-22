import { test as setup, expect } from "../fixtures/fixture.js";
import { Login } from "../test-data/test-data.json";

setup("User login", async ({ loginTest, page }) => {
  await loginTest.login(Login.username, Login.password);
  await expect(page).toHaveURL("http://localhost:8000/desk");
  await expect(page.locator("#page-desktop")).toMatchAriaSnapshot(`
    - img "Framework"
    - text: /Framework \\d+ Workspaces/
    - link:
      - /url: /desk/payables
    - link:
      - /url: /desk/receivables
    - link "Accounting":
      - /url: /desk/accounting
      - img "Accounting"
    - link:
      - /url: /desk/period-closing-voucher
    - link:
      - /url: /desk/item-tax-template
    - link:
      - /url: /desk/budget
    - link:
      - /url: /desk/bank-reconciliation-tool
    - link:
      - /url: /desk/subscription
    - link:
      - /url: /desk/financial-reports
    - text: Accounts
    - link "Selling Selling":
      - /url: /desk/selling
      - img "Selling"
      - text: ""
    - link "Buying Buying":
      - /url: /desk/buying
      - img "Buying"
      - text: ""
    - link "Stock Stock":
      - /url: /desk/stock
      - img "Stock"
      - text: ""
    - link "Manufacturing Manufacturing":
      - /url: /desk/manufacturing
      - img "Manufacturing"
      - text: ""
    - link "Subcontracting Subcontracting":
      - /url: /desk/subcontracting
      - img "Subcontracting"
      - text: ""
    - link "CRM CRM":
      - /url: /desk/crm
      - img "CRM"
      - text: ""
    - link "Assets Assets":
      - /url: /desk/assets
      - img "Assets"
      - text: ""
    - link "Projects Projects":
      - /url: /desk/projects
      - img "Projects"
      - text: ""
    - link "Quality Quality":
      - /url: /desk/quality
      - img "Quality"
      - text: ""
    - link "Settings Settings":
      - /url: /desk/settings
      - img "Settings"
      - text: ""
    - link "Support Support":
      - /url: /desk/support
      - img "Support"
      - text: ""
    - img "Frappe HR"
    - text: /Frappe HR \\d+ Workspaces/
    `);
  await page.context().storageState({ path: "./.auth/user.json" });
});
