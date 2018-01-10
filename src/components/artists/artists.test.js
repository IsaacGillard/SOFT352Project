import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import ArtistsPage from './ArtistsPage';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

test('ArtistsPage component should render as expected', () => {
  const component = shallow(<ArtistsPage />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
