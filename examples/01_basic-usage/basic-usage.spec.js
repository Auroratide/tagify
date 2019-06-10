import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Container from './Container';

describe('Basic Usage', () => {
  const elementName = wrapper => wrapper.container.children[0].tagName.toLowerCase();

  it('should use article tag when specifying the article tag', () => {
    const wrapper = render(<Container.article>Hello, Aurora!</Container.article>);

    expect(elementName(wrapper)).toEqual('article');
  });

  afterEach(cleanup);
});