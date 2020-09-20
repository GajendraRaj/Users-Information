import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import Users from "../components/users";

describe("App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render title correctly", () => {
    expect(wrapper.find("h1").text()).toEqual("DB Users");
  });

  it("should render Users component", () => {
    expect(wrapper.find(Users).length).toEqual(1);
  });
});
