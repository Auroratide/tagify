import Container from './Container';

describe('Whitelisting Tags', () => {

  it('should allow tags included in the whitelist', () => {
    expect(Container.article).toBeDefined();
    expect(Container.section).toBeDefined();
    expect(Container.div).toBeDefined();
  });

  it('should disallow tags not included in the whitelist', () => {
    expect(Container.span).not.toBeDefined();
    expect(Container.a).not.toBeDefined();
    expect(Container.p).not.toBeDefined();
  });

});