import * as React from "react";
import * as ReactDOM from "react-dom";
import MyButton from "./MyButton";
import MyList from "./MyList";
const Ex1_2 = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"],
  };

  function render(props) {
    root.render(
      <div>
        <MyButton text={props.text} disabled={props.disabled} />
        <MyList items={props.items} />
      </div>
    );
  }

  render(appState);

  setTimeout(() => {
    appState.disabled = false;
    appState.items.push("Fourth");

    render(appState);
  }, 1000);
  return <div>Ex1_2</div>;
};

export default Ex1_2;
