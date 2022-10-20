import * as React from "react";

class Ex1 extends React.Component {
  state = {
    first: false,
    second: true,
  };

  render() {
    const { first, second } = this.state;

    return (
      <main>
        <section>
          <button disable={first}>First</button>
        </section>
        <section>
          <button disabled={second}>Second</button>
        </section>
      </main>
    );
  }
}

export default Ex1;
