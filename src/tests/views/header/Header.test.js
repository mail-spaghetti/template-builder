import React from 'react';

import { shallow } from "enzyme";

import { Header } from '../../../pages/HeaderPage/HeaderContainer';

test("Should render Header correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})