import { TestCorsPage } from './app.po';

describe('test-cors App', () => {
  let page: TestCorsPage;

  beforeEach(() => {
    page = new TestCorsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
