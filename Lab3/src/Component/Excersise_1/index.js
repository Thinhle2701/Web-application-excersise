import React from "react";
import Ex0 from "./Ex1_0";
import Ex1 from "./Ex1_1";
import Ex2 from "./Ex1_2";
import MyButton from "./MyButton";
import MyList from "./MyList";
const index = () => {
  const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"],
  };

  const second = {
    text: "Second Button",
    disabled: true,
  };
  return (
    <div style={{ marginLeft: "40%" }}>
      <h1>Ex1.0</h1>
      <Ex0 />
      <h1>Ex1.1</h1>
      <Ex1 />
      <h1>Ex1.2</h1>
      <MyButton text={appState.text} disabled={appState.disabled} />
      <MyList items={appState.items} />
      <h1>Ex1.3</h1>
      <MyButton text={second.text} disabled={second.disabled} />
    </div>
  );
};

export default index;
