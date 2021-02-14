import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { Constants } from './app.constants';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display my name', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual(Constants.TITLE);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
