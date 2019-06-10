const React = require('react');

const addTag = (Tag, Component) => {
  Component[Tag] = ({ children, ...props }) => React.createElement(Component, { Tag, ...props }, children);
};

module.exports = Component => {
  addTag('article', Component);

  return Component;
};