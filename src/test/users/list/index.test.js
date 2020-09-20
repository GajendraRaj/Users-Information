import React from "react";
import { shallow } from "enzyme";
import List from "../../../components/users/list";
import DeleteUser from "../../../components/users/delete";

describe("List component", () => {
  let wrapper;
  const users = [
    {
      id: 1,
      name: "Test1",
      age: 33,
      address: "Hinjawadi",
      pinCode: "411057",
      city: "Pune",
      country: "India",
    },
  ];
  const deleteUserHandler = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<List users={users} deleteUser={deleteUserHandler} />);
  });

  it("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render DeleteUser component", () => {
    expect(wrapper.find(DeleteUser)).toBeDefined();
  });
});
