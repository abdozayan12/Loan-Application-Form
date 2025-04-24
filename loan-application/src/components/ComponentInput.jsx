import React from "react";

export default function CoponentInput({
  label,
  id,
  type = "text",
  value,
  handleChange,
  ...rest // للبروبس الإضافية زي maxLength أو min/max
}) {
  return (
    <>
      <label htmlFor={id}>{label}: </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        {...rest}
      />
    </>
  );
}
