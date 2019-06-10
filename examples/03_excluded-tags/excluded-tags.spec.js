import Container from './Container';

describe('Exlcuded Tags', () => {

  it('should disallow tags included in the exclude list', () => {
    expect(Container.a).not.toBeDefined();
    expect(Container.button).not.toBeDefined();
  });

  it('should allow tags not included in the exclude list', () => {
    expect(Container.span).toBeDefined();
    expect(Container.p).toBeDefined();
    expect(Container.ul).toBeDefined();
  });

});