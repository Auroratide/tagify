import React from 'react';
import tagify, { tags } from '../..';

const Container = ({ Tag, children, ...props }) =>
  <Tag {...props}>
    {children}
  </Tag>;

export default tagify(Container, {
  exclude: [ tags.a, tags.button ]
});