import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import HomePage from './HomePage';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

test('HomePage component should render as expected', () => {
  const component = shallow(<HomePage />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
