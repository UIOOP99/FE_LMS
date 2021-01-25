import React from 'react';
import { mount } from "enzyme";
import ExamCard from "../ExamCard";
import { Avatar } from '@material-ui/core';

describe("<BannerNav/> component", () => {
  it("renders without crashing", () => {
    mount(<ExamCard />);
 });

  it("should render Avatar", () => {
    const wrapper = mount(<ExamCard />);
    expect(wrapper.contains(Avatar)).toBe(true);
 });
});
