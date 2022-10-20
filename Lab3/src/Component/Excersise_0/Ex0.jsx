import React from "react";
import Ex03 from "./index";

const Ex0 = () => {
  return (
    <div style={{ marginLeft: "40%" }}>
      <h1>0.0</h1>
      <p>
        Hello, <strong>JSX</strong>
      </p>
      <h1>0.1</h1>
      <div>
        <button />
        <code />
        <input />
        <label />
        <p />
        <pre />
        <select />
        <table />
        <ul />
      </div>
      <h1>0.2</h1>
      <section>
        <header>
          <h1>A header</h1>
        </header>
        <nav>
          <a href="item">Nav Item</a>
        </nav>
        <main>
          <p>The main content...</p>
        </main>
        <footer>
          <small>&copy; 2021</small>
        </footer>
      </section>
      <h1>0.3</h1>
      <Ex03 />
    </div>
  );
};

export default Ex0;
