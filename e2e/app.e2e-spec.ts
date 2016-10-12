import { CargoPage } from './app.po';

describe('cargo App', function() {
  let page: CargoPage;

  beforeEach(() => {
    page = new CargoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
