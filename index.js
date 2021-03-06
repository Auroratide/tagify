const React = require('react');

const addTag = (Tag, Component) => {
  Component[Tag] = ({ children, ...props }) => React.createElement(Component, { Tag, ...props }, children);
};

const tags = {
  a: 'a',
  article: 'article',
  aside: 'aside',
  br: 'br',
  details: 'details',
  div: 'div',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  header: 'header',
  hgroup: 'hgroup',
  hr: 'hr',
  footer: 'footer',
  main: 'main',
  nav: 'nav',
  p: 'p',
  section: 'section',
  span: 'span',
  summary: 'summary',
  button: 'button',
  datalist: 'datalist',
  fieldset: 'fieldset',
  form: 'form',
  input: 'input',
  label: 'label',
  legend: 'legend',
  meter: 'meter',
  optgroup: 'optgroup',
  option: 'option',
  select: 'select',
  textarea: 'textarea',
  abbr: 'abbr',
  acronym: 'acronym',
  address: 'address',
  b: 'b',
  bdi: 'bdi',
  bdo: 'bdo',
  big: 'big',
  blockquote: 'blockquote',
  cite: 'cite',
  code: 'code',
  del: 'del',
  dfn: 'dfn',
  em: 'em',
  i: 'i',
  ins: 'ins',
  kbd: 'kbd',
  mark: 'mark',
  output: 'output',
  pre: 'pre',
  progress: 'progress',
  q: 'q',
  rp: 'rp',
  rt: 'rt',
  ruby: 'ruby',
  samp: 'samp',
  small: 'small',
  strong: 'strong',
  sub: 'sub',
  sup: 'sup',
  tt: 'tt',
  var: 'var',
  wbr: 'wbr',
  dd: 'dd',
  dl: 'dl',
  dt: 'dt',
  li: 'li',
  ol: 'ol',
  menu: 'menu',
  ul: 'ul',
  caption: 'caption',
  col: 'col',
  colgroup: 'colgroup',
  table: 'table',
  tbody: 'tbody',
  td: 'td',
  tfoot: 'tfoot',
  thead: 'thead',
  th: 'th',
  tr: 'tr',
  area: 'area',
  figcaption: 'figcaption',
  figure: 'figure',
  img: 'img',
  map: 'map',
  noframes: 'noframes',
  time: 'time'
};

module.exports = (Component, options = {}) => {
  Object
    .values(tags)
    .filter(tag => {
      if(options.include) {
        return options.include.includes(tag);
      } else if(options.exclude) {
        return !options.exclude.includes(tag);
      } else {
        return true;
      }
    })
    .forEach(tag => addTag(tag, Component));
  
  if(options.default)
    Component.defaultProps = Object.assign(Component.defaultProps || {}, { Tag: options.default });
  
  return Component;
};

module.exports.tags = tags;