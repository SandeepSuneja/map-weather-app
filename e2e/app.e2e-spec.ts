import { MapWeatherPage } from './app.po';

describe('map-weather App', function() {
  let page: MapWeatherPage;

  beforeEach(() => {
    page = new MapWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
