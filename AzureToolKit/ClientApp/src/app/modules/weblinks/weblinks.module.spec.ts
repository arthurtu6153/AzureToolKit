import { WeblinksModule } from './weblinks.module';

describe('WeblinksModule', () => {
  let weblinksModule: WeblinksModule;

  beforeEach(() => {
    weblinksModule = new WeblinksModule();
  });

  it('should create an instance', () => {
    expect(weblinksModule).toBeTruthy();
  });
});
