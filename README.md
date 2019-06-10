# tagify

**tagify** is a simple Higher-Order Component that allows you to succinctly define what HTML tag a component should use.

Let's say you have a generic `Container` component which just adds the `container` class name to the element and defines some CSS. You could make the component always be a `div`, but we're big fans of accessibility, so we wanna use those nice and juicy _semantic tags_. Wouldn't it be nice if we could just do this?

```jsx
const Page = () =>
  <>
    <Container.header>
      My Website
    </Container.header>
    <Container.section>
      This is the world's greatest website.
    </Container.section>
    <Container.footer>
      Because it's so simple, it has no bugs.
    </Container.footer>
  </>
```

Well, with **tagify** you can!

## How to use

Three simple steps:

1. Define your component to take a dynamic tag
2. Apply the **tagify** higher-order component
3. Use your new component with joy!

### 1) Define your component to take a dynamic tag

`Tag` will become a prop on your component, provided by the `tagify` function in Step 2.

```jsx
const MyComponent = ({ Tag, children, ...props }) =>
  <Tag {...props}>
    {children}
  </Tag>;
```

_Note: There's nothing related to the tagify library in this step!_

### 2) Apply the tagify higher-order component

```js
import tagify from '@auroratide/tagify';

tagify(MyComponent)
```

### 3) Use your new component with joy!

```jsx
<MyComponent.blockquote className='left'>
  This component is awesome.
</MyComponent.blockquote>
```

## Options

You can specify some additional options as a second parameter to the `tagify` function. Here are the allowed options:

```
{
  include: [ List of tag names as strings ],
  exclude: [ List of tag names as strings ],
  default: string
}
```

### Include List

Use the `include` option to specify a list of tags the component will use. All other tags will be excluded.

```jsx
import tagify, { tags } from '@auroratide/tagify';

tagify(MyComponent, {
  include: [ tags.article, tags.section ]
});

// Valid
<MyComponent.article />

// Invalid
<MyComponent.div />
```

### Exclude List

Use the `exclude` option to specify a list of tags the component should _not_ use. All other tags will be included. Yep, it's the opposite of the include list!

```jsx
import tagify, { tags } from '@auroratide/tagify';

tagify(MyComponent, {
  exclude: [ tags.ul, tags.ol ]
});

// Valid
<MyComponent.div />

// Invalid
<MyComponent.ol />
```

### Default Tag

Use the `default` option to specify a tag that should be used when one isn't specified.

```jsx
import tagify, { tags } from '@auroratide/tagify';

tagify(MyComponent, {
  default: tag.div
});

// Will use <div> tag
<MyComponent />
```