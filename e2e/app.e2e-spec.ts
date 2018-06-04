import { ShopHollaDraftPage } from './app.po';

describe('shop-holla-draft App', () => {
  let page: ShopHollaDraftPage;

  beforeEach(() => {
    page = new ShopHollaDraftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
