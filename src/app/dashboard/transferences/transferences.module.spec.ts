import { TransferencesModule } from './transferences.module';

describe('TransferencesModule', () => {
  let transferencesModule: TransferencesModule;

  beforeEach(() => {
    transferencesModule = new TransferencesModule();
  });

  it('should create an instance', () => {
    expect(transferencesModule).toBeTruthy();
  });
});
