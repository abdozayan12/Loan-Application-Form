import React from 'react'

export default function ApplicationForm() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted");
  }

  return (
    <div className='form'>
      <h1>Requesting a Loan</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" />
        <br />

        <label htmlFor="phone">Phone Number: </label>
        <input id="phone" type="number" max='12'/>
        <br />

        <label htmlFor="age">Age: </label>
        <input id="age" type="number" min="18" max="60" />
        <br />

        <label htmlFor="employee">Are You An Employee? </label>
        <input id="employee" type="checkbox" />
        <br />

        <label htmlFor="salary">Salary: </label>
        <select id="salary">
          <option>-- Select Salary --</option>
          <option>Less than 500$</option>
          <option>More than 500$</option>
        </select>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
