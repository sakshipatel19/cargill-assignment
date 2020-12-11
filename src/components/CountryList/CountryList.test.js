import React from 'react';

import CountryList from './CountryList';
import CountryListItem from './CountryListItem';
import { shallow } from 'enzyme';

describe(() => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<CountryList />);
  });
  afterAll(() => {
    wrapper.unmount();
  });
  it(' CountryList renders correctly ', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('CountryListItem render correctly ', () => {
    expect(wrapper.find(CountryListItem).length).toEqual(1);
  });

  it('should call handleChange', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().handleChange();
    expect(spy).toHaveBeenCalled();
  });

  it('should call handleSelect', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSelect');
    wrapper.instance().handleSelect();
    expect(spy).toHaveBeenCalled();
  });
});
