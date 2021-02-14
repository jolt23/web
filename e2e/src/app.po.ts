import { browser, by, element } from 'protractor';
import { Constants } from './app.constants';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    const title = browser.getTitle().then((webpagetitle) => {
      if (webpagetitle === Constants.TITLE){
        return Constants.TITLE;
      } else {
        return ''
      }
    });
    return title;
  }
}
