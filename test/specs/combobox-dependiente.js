import { expect } from "@wdio/globals";
import ComboboxPage from "../pageobjects/combobox-dependiente.page.js";

describe("My Login application", () => {
  it(`should test open page combobox`, async () => {
    await ComboboxPage.open();
    expect(await ComboboxPage.pageTitle).toHaveTitle(
      "ComboBox Dependiente | TestingQaRvn"
    );
  });
});
