import React from 'react';
import { mount } from "enzyme";
import ClassCardSkeleton from "../ClassCardSkeleton";

describe("<ClassCardSkeleton/> component", () => {
  it("renders without crashing", () => {
    mount(<ClassCardSkeleton />);
 });
});

