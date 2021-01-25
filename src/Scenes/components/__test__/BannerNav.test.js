import React from 'react';
import { mount } from "enzyme";
import { Typography } from '@material-ui/core';
import BannerNav from "../BannerNav";

describe("<BannerNav/> component", () => {
  it("renders without crashing", () => {
    mount(<BannerNav />);
 });
  it("should render Typography", () => {
    const wrapper = mount(<BannerNav />);
    expect(wrapper.contains(Typography)).toBe(true);
 });
});
