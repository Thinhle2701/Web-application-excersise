import React from "react";

const Ex3 = () => {
  function onChange() {
    console.log("changed");
  }
  function onBlur() {
    console.log("blured");
  }
  return (
    <div>
      <h1>Excersise 3</h1>
      <input
        onChange={() => {
          onChange();
        }}
        onBlur={() => {
          onBlur();
        }}
      ></input>
    </div>
  );
};

export default Ex3;
