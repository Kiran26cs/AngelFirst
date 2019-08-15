import { AngelFirstPage } from './app.po';

describe('angel-first App', () => {
  let page: AngelFirstPage;

  beforeEach(() => {
    page = new AngelFirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
