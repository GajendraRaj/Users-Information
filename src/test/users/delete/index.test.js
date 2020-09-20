import React from "react";
import { shallow } from "enzyme";
import DeleteUser from "../../../components/users/delete";

describe("DeleteUser component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DeleteUser />);
  });

  it("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Delete button delete the record", () => {
    expect(wrapper.find("button").at(0).text()).toEqual("Delete");
  });

  it("should render model popup on Delete button click", () => {
    const deleteButton = wrapper.find("button").at(0);
    deleteButton.simulate("click");
    expect(wrapper.find("span").at(0).text()).toEqual("Delete User");
  });
});
