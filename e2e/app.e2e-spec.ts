import { WebPortfoliosPage } from './app.po';

describe('web-portfolios App', () => {
  let page: WebPortfoliosPage;

  beforeEach(() => {
    page = new WebPortfoliosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
