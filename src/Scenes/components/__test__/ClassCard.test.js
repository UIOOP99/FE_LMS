import React from 'react';
import { mount } from "enzyme";
import ClassCard from "../ClassCard";

describe("<ClassCard/> component", () => {
  it("renders without crashing", () => {
    mount(<ClassCard title="test0" id={12345} Icon={EmptyComponent} primaryDesc='test1' secondaryDesc='test2'/>);
 });
});

const EmptyComponent = () => <div></div>;