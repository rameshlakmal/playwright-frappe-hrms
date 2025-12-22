import { test as base, expect } from "@playwright/test";
import { loginFixtures } from "./login.js";
import { salesFixtures } from "./sales.js";

export const test = base.extend({
  ...loginFixtures,
  ...salesFixtures,
});

export { expect };
