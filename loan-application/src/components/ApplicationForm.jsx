import React from "react";
import { useState } from "react";
import Model from "./Model";
import "../App.css";

export default function ApplicationForm() {
  const [showModel, setShowModel] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setFormInput({
      name: "",
      phone: "",
      age: "",
      employee: false,
      salary: "",
    });
    setShowModel(true)
    setTimeout(() => { setShowModel(false) }, 5000);
  }

  const btnIsDisabled =
    formInput.name === "" || formInput.phone === "" || formInput.age === "";

  function handelShowModel() {
    if (showModel) {
      setShowModel(false);
    }
  }

  return (
    <div className="form" onClick={handelShowModel}>
      <form onSubmit={handleSubmit}>
        <h1>Requesting a Loan</h1>
        <hr />
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={formInput.name}
          onChange={(e) => {
            setFormInput({ ...formInput, name: e.target.value });
          }}
        />
        <br />

        <label htmlFor="phone">Phone Number: </label>
        <input
          id="phone"
          maxLength="12"
          value={formInput.phone}
          onChange={(e) => {
            setFormInput({ ...formInput, phone: e.target.value });
          }}
        />
        <br />

        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="number"
          min="18"
          max="60"
          value={formInput.age}
          onChange={(e) => {
            setFormInput({ ...formInput, age: e.target.value });
          }}
        />
        <br />

        <label htmlFor="employee">Are You An Employee? </label>
        <input
          id="employee"
          type="checkbox"
          checked={formInput.employee}
          onChange={(e) => {
            setFormInput({ ...formInput, employee: e.target.checked });
          }}
        />
        <br />

        <label htmlFor="salary">Salary: </label>
        <select
          id="salary"
          value={formInput.salary}
          onChange={(e) => {
            setFormInput({ ...formInput, salary: e.target.value });
          }}
        >
          <option value="">-- Select Salary --</option>
          <option>Less than 500$</option>
          <option>More than 500$</option>
        </select>
        <br />
        <br />

        <button
          type="submit"
          disabled={btnIsDisabled}
          className={btnIsDisabled ? "disabled" : ""}
        >
          Submit
        </button>
      </form>
      <Model isVisible={showModel} />
    </div>
  );
}
