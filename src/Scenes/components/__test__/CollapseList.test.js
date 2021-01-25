import React from 'react';
import { mount } from "enzyme";
import CollapseList from "../CollapseList";
import { ListItem } from '@material-ui/core';

describe("<BannerNav/> component", () => {
  it("renders without crashing", () => {
    mount(<CollapseList />);
 });
  it("should render ListItem", () => {
    const wrapper = mount(<CollapseList />);
    expect(wrapper.contains(ListItem)).toBe(true);
 });
});
