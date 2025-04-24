import React from "react";
import './model.css'

export default function Model({ isVisible }) {
  if (isVisible) {
    return (
      <div id="model">
        <div id="model-content">
          <div>
            <h1>The Form Has Been Submitted Successfully</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
