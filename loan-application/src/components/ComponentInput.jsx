import React from "react";
import { useContext } from "react";
import { LoanFormInputContexts } from "../context/LoanFormInputContext";

export default function CoponentInput() {

  const inputContext = useContext(LoanFormInputContexts)
  return (
    <>
      <label htmlFor={inputContext.id}>{inputContext.label}: </label>
      <input
        id={inputContext.id}
        type={inputContext.type}
        value={inputContext.value}
        onChange={(e) => inputContext.handleChange(e.target.value)}
      
      />
    </>
  );
}
