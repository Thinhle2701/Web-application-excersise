import * as React from "react";

class MyButton extends React.Component {
  render() {
    const { disable, text } = this.props;
    return <button disabled={disable}>{text}</button>;
  }
}
MyButton.defaultProps = {
  text: "My Button",
  disabled: false,
};

export default MyButton;
