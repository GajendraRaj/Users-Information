import React from "react";
import { shallow } from "enzyme";
import CreateList from "../../../components/users/create";

describe("CreateList component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CreateList />);
  });

  it("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Create user button to add new record", () => {
    expect(wrapper.find("button").at(0).text()).toEqual("Create New User");
  });

  it("should render model popup on 'Create New User' button click", () => {
    const createButton = wrapper.find("button").at(0);
    createButton.simulate("click");
    expect(wrapper.find("th").at(0).text()).toEqual("Create New User");
  });
});
