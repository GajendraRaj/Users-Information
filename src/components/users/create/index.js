import React, { useState, useRef } from "react";

const CreateList = (props) => {
  const initialState = {
    id: "",
    name: "",
    age: "",
    address: "",
    pinCode: "",
    city: "",
    country: "",
  };
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const inputRef = useRef();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    const isValid = formValidation();
    if (isValid) {
      props.createUser(state);
      setState(initialState);
      inputRef.current.click();
    }
  };

  const formValidation = () => {
    if (state.name.length < 1) {
      setError("Pleas enter the name");
      return false;
    }
    if (state.age.length < 1) {
      setError("Pleas enter the age");
      return false;
    }
    if (state.address.length < 1) {
      setError("Pleas enter the address");
      return false;
    }
    if (state.pinCode.length < 1) {
      setError("Pleas enter the pincode");
      return false;
    }
    if (state.city.length < 1) {
      setError("Pleas enter the city");
      return false;
    }
    if (state.country.length < 1) {
      setError("Pleas enter the country");
      return false;
    }
    if (isNaN(state.age)) {
      setError("Please enter the valide age");
      return false;
    }
    return true;
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#myModal"
      >
        Create New User
      </button>
      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <table className="table">
              <thead>
                <tr className="btn-primary">
                  <th style={{ textAlign: "center" }} colSpan="2">
                    Create New User
                  </th>
                </tr>
              </thead>
              <tbody>
                {error.length > 0 && (
                  <tr>
                    <th colSpan="2" style={{ color: "red" }}>
                      {`* ${error}`}
                    </th>
                  </tr>
                )}
                <tr>
                  <th>Name *</th>
                  <td>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      value={state.name}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th>Age *</th>
                  <td>
                    <input
                      type="text"
                      placeholder="age"
                      name="age"
                      value={state.age}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address *</th>
                  <td>
                    <input
                      type="text"
                      placeholder="address"
                      name="address"
                      value={state.address}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th>Pin Code *</th>
                  <td>
                    <input
                      type="text"
                      placeholder="pinCode"
                      name="pinCode"
                      value={state.pinCode}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th>City *</th>
                  <td>
                    <input
                      type="text"
                      placeholder="city"
                      name="city"
                      value={state.city}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th>Country *</th>
                  <td>
                    <input
                      type="text"
                      placeholder="country"
                      name="country"
                      value={state.country}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="btn-primary">
                  <th style={{ textAlign: "center" }} colSpan="2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      ref={inputRef}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Create
                    </button>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateList;
