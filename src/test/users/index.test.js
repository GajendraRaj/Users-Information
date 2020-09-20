import React from "react";
import { shallow, mount } from "enzyme";
import Users from "../../components/users";
import CreateList from "../../components/users/create";
import List from "../../components/users/list";

describe("Users component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Users />);
  });

  it("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render CreateList component", () => {
    expect(wrapper.find(CreateList).length).toEqual(1);
  });

  it("should render Lists component", () => {
    expect(wrapper.find(List).length).toEqual(1);
  });
});

describe("Users functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Users />);
  });

  it("should dispaly 100 records of row data by default On app Start", () => {
    const listWrapper = wrapper.find("List");
    expect(listWrapper.props().users.length).toEqual(100);
  });

  it("should create new user on creat user button click ", () => {
    const createUserHandler = jest.fn();
    const wrapper = mount(<CreateList createUser={createUserHandler} />);
    const listWrapper = wrapper.find("CreateList");
    const createButton = listWrapper.find("button").at(0);
    createButton.simulate("click");
    const saveButton = listWrapper.find("button").at(2);
    saveButton.simulate("click");
    expect(createUserHandler).toBeTruthy();
  });

  it("should delete existing user on delete button click ", () => {
    const deleteUserHandler = jest.fn();
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
    const wrapper = mount(
      <List users={users} deleteUser={deleteUserHandler} />
    );
    const DeleteWrapper = wrapper.find("DeleteUser");
    const DeleteButton = DeleteWrapper.find("button").at(0);
    DeleteButton.simulate("click");
    const saveButton = DeleteWrapper.find("button").at(3);
    saveButton.simulate("click");
    expect(deleteUserHandler).toBeTruthy();
  });
});
