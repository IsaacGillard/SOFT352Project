import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import AlbumsPage from './AlbumsPage';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

test('AlbumsPage component should render as expected', () => {
  const component = shallow(<AlbumsPage />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
