import React from 'react';
import tagify, { tags } from '../..';

const Container = ({ Tag, children, ...props }) =>
  <Tag {...props}>
    {children}
  </Tag>;

export default tagify(Container, {
  whitelist: [ tags.article, tags.section, tags.div ]
});