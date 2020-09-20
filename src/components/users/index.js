import React, { useState, useEffect } from "react";
import List from "./list";
import CreateList from "./create";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    setLoading(true);
    let tempUserlist = [];
    if (users.length < 1) {
      for (let i = 1; i <= 100; i++) {
        let randomAge = Math.floor(Math.random() * 60 + 1);
        let user = {
          id: i,
          name: `User${i}`,
          age: randomAge,
          address: `Temp Address - ${i}`,
          pinCode: `41105${i}`,
          city: "Pune",
          country: "India",
        };
        tempUserlist.push(user);
        setUserId(tempUserlist.length);
      }
    } else {
      tempUserlist = [...users];
    }
    setUsers(tempUserlist);
    setLoading(false);
  }, [isDelete]);

  const createUserHandler = (model) => {
    model.id = userId + 1;
    setUsers([...users, model]);
    setUserId((prevState) => prevState + 1);
  };

  const deleteUserHandler = (id) => {
    const userList = users.filter((user) => user.id !== id);
    setUsers(userList);
    setIsDelete(!isDelete);
  };

  return (
    <div className="container">
      <span className="title-bar" style={{ float: "right" }}>
        <CreateList createUser={createUserHandler} />
      </span>
      <br />
      {loading ? (
        <span>Loading...</span>
      ) : (
        <List users={users} deleteUser={deleteUserHandler} />
      )}
    </div>
  );
};

export default Users;
