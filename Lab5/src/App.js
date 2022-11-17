import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Ex1 from "./Component/Lab5/Ex1/App";
import Ex2 from "./Component/Lab5/Ex2/App";
export default function App() {
  const [myComponent, setComponent] = useState(() => () => null);
  useEffect(() => {
    import("./Component/Excersise_1/Ex1_0").then((module) => {
      setComponent(() => module.default);
    });
  }, []);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/excersise_1">Ex1</Link>
          </li>
          <li>
            <Link to="/excersise_2">Ex2</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/excersise_1">
            <Ex1 />
          </Route>
          <Route path="/excersise_2">
            <Ex2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div></div>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return <div></div>;
}
