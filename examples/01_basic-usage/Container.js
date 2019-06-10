import React from 'react';
import tagify from '../..';

const Container = ({ Tag, children, ...props }) =>
  <Tag {...props}>
    {children}
  </Tag>;

export default tagify(Container);