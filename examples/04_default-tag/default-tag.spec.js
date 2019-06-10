import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Container from './Container';

describe('Default Tag', () => {
  const elementName = wrapper => wrapper.container.children[0].tagName.toLowerCase();

  it('should use default tag when no tag is otherwise specified', () => {
    const wrapper = render(
      <Container>
        Hello, Aurora!
      </Container>
    );

    expect(elementName(wrapper)).toEqual('section');
  });

  afterEach(cleanup);
});