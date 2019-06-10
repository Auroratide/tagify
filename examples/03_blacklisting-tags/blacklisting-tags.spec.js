import Container from './Container';

describe('Blacklisting Tags', () => {

  it('should disallow tags included in the blacklist', () => {
    expect(Container.a).not.toBeDefined();
    expect(Container.button).not.toBeDefined();
  });

  it('should allow tags not included in the blacklist', () => {
    expect(Container.span).toBeDefined();
    expect(Container.p).toBeDefined();
    expect(Container.ul).toBeDefined();
  });

});