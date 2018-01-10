import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import ListPage from './ListPage';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

test('ListPage component should render as expected', () => {
  const component = shallow(<ListPage />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
