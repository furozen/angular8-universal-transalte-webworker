import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getFlagElement() {
    let el = element(by.css("app-lesson-panel > article > app-lesson  div.title > img[src*='content-flag']"));
    return el;
  }
}

