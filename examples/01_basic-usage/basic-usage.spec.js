import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { tags } from '../..';
import Container from './Container';

describe('Basic Usage', () => {
  const elementName = wrapper => wrapper.container.children[0].tagName.toLowerCase();

  // Kept as a primary use-case scenario
  it('should use article tag when specifying article in the component', () => {
    const wrapper = render(
      <Container.article>
        Hello, Aurora!
      </Container.article>
    );

    expect(elementName(wrapper)).toEqual('article');
  });

  describe('For all available tags', () => {
    const voidTags = [
      tags.br, tags.hr, tags.input,
      tags.wbr, tags.area, tags.img,
      tags.textarea
    ];

    const tableTags = [
      tags.table, tags.tr, tags.td, tags.th,
      tags.thead, tags.tbody, tags.tfoot,
      tags.caption, tags.colgroup, tags.col
    ];

    const excludedTags = voidTags.concat(tableTags);

    Object.values(tags).filter(tag => !excludedTags.includes(tag)).forEach(tag => {
      it(`should use the ${tag} tag when specifying ${tag} in the component`, () => {
        const TaggedComponent = Container[tag];
        const wrapper = render(<TaggedComponent>Hello, Aurora!</TaggedComponent>);
  
        expect(elementName(wrapper)).toEqual(tag);
      });
    });

    voidTags.forEach(tag => {
      it(`should use the ${tag} tag when specifying ${tag} in the component`, () => {
        const TaggedComponent = Container[tag];
        const wrapper = render(<TaggedComponent />);
  
        expect(elementName(wrapper)).toEqual(tag);
      });
    });

    it('should use the appropriate table tags when specified', () => {
      const wrapper = render(
        <Container.table data-testid="table">
          <Container.caption data-testid="caption" />
          <Container.colgroup data-testid="colgroup">
            <Container.col data-testid="col" />
          </Container.colgroup>
          <Container.thead data-testid="thead">
            <Container.tr data-testid="tr">
              <Container.th data-testid="th" />
            </Container.tr>
          </Container.thead>
          <Container.tbody data-testid="tbody">
            <Container.tr>
              <Container.td data-testid="td" />
            </Container.tr>
          </Container.tbody>
          <Container.tfoot data-testid="tfoot">
            <Container.tr>
              <Container.td />
            </Container.tr>
          </Container.tfoot>
        </Container.table>
      );

      expect(wrapper.getByTestId('table').tagName.toLowerCase()).toEqual('table');
      expect(wrapper.getByTestId('caption').tagName.toLowerCase()).toEqual('caption');
      expect(wrapper.getByTestId('colgroup').tagName.toLowerCase()).toEqual('colgroup');
      expect(wrapper.getByTestId('col').tagName.toLowerCase()).toEqual('col');
      expect(wrapper.getByTestId('thead').tagName.toLowerCase()).toEqual('thead');
      expect(wrapper.getByTestId('tr').tagName.toLowerCase()).toEqual('tr');
      expect(wrapper.getByTestId('th').tagName.toLowerCase()).toEqual('th');
      expect(wrapper.getByTestId('tbody').tagName.toLowerCase()).toEqual('tbody');
      expect(wrapper.getByTestId('td').tagName.toLowerCase()).toEqual('td');
      expect(wrapper.getByTestId('tfoot').tagName.toLowerCase()).toEqual('tfoot');
    });
  });

  afterEach(cleanup);
});