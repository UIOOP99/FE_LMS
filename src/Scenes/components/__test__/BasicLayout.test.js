import React from 'react';
import { mount } from "enzyme";
import BaseLayout from "../BaseLayout";

describe("<BaseLayout/> component", () => {
  it("renders without crashing", () => {
    mount(<BaseLayout CenterComponent={EmptyComponent} LeftComponent={EmptyComponent} RightComponent={EmptyComponent} />);
 });
});

const EmptyComponent = () => <div></div>;