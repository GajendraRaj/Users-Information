import React, { useState, useEffect } from "react";
import DeleteUser from "../delete";

const List = (props) => {
  const initialState = {
    currentPage: 1,
    listPerPage: 10,
  };
  const [state, setState] = useState(initialState);
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    const lastListIndex = state.currentPage * state.listPerPage;
    const firsListIndex = lastListIndex - state.listPerPage;
    setCurrentList(props.users.slice(firsListIndex, lastListIndex));
  }, [state, props]);

  const rows = [];
  if (currentList.length > 0) {
    currentList.forEach((element) => {
      rows.push(
        <tr key={element.id}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.age}</td>
          <td>{element.address}</td>
          <td>{element.pinCode}</td>
          <td>{element.city}</td>
          <td>{element.country}</td>
          <td>
            <DeleteUser
              elementId={element.id}
              deleteUser={props.deleteUser}
            ></DeleteUser>
          </td>
        </tr>
      );
    });
  }

  const handleClick = (number) => {
    setState((prevState) => {
      return {
        ...prevState,
        currentPage: Number(number),
      };
    });
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.users.length / state.listPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={() => handleClick(number)}>
        {number}
      </li>
    );
  });

  return (
    <div>
      <table style={{ textAlign: "left" }} className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>PinCode</th>
            <th>City</th>
            <th>Country</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <ul id="paging-numbers">{renderPageNumbers}</ul>
    </div>
  );
};

export default List;
