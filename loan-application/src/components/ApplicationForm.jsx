import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Model from "./Model";
import "../App.css";
import ComponentInput from "./ComponentInput";
import { LoanFormInputContexts } from "../context/LoanFormInputContext";
import { userContext } from "../context/UserContext";


export default function ApplicationForm() {

  const userData = useContext(userContext)
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
    setShowModel(true);
    setTimeout(() => {
      setShowModel(false);
    }, 5000);
  }

  const btnIsDisabled =
    formInput.name === "" || formInput.phone === "" || formInput.age === "";

  function handelShowModel() {
    if (showModel) {
      setShowModel(false);
    }
  }

  function nameChange(value) {
    setFormInput({ ...formInput, name: value });
  }

  function phoneNumberChange(value) {
    setFormInput({ ...formInput, phone: value });
  }

  function ageChange(value) {
    setFormInput({ ...formInput, age: value });
  }

  return (
    <div className="form" onClick={handelShowModel}>
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: "Red", fontSize: "25px" }}>Hello {userData.name}</h1>
        <h1>Requesting a Loan</h1>
        <hr />
        <LoanFormInputContexts.Provider
          value={{
            label: "Name",
            id: "name",
            type: "text",
            value: formInput.name,
            handleChange: nameChange,
          }}
        >
          <ComponentInput />
        </LoanFormInputContexts.Provider>

        <LoanFormInputContexts.Provider
          value={{
            label: "Phone Number",
            id: "phone",
            type: "tel",
            maxLength: "12",
            value: formInput.phone,
            handleChange: phoneNumberChange,
          }}
        >
          <ComponentInput />
        </LoanFormInputContexts.Provider>

        <LoanFormInputContexts.Provider
          value={{
            label: "Age",
            id: "age",
            type: "number",
            min: "18",
            max: "60",
            value: formInput.age,
            handleChange: ageChange,
          }}
        >
          <ComponentInput />
        </LoanFormInputContexts.Provider>

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
