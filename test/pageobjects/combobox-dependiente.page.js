import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ComboboxPage extends Page {
  /**
   * define selectors using getter methods
   */

  get pageTitle() {
    return browser.getTitle();
  }
  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("combobox-dependiente");
  }
}

export default new ComboboxPage();
