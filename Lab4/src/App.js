import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Ex4 from "./Component/Lab4/Ex4";
import Ex5 from "./Component/Lab4/Ex5/index";
import Ex6 from "./Component/Lab4/Ex6/index";
import Ex12 from "./Component/Lab4/Ex12/Main";
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
            <Link to="/excersise_4">Ex4</Link>
          </li>
          <li>
            <Link to="/excersise_5">Ex5</Link>
          </li>
          <li>
            <Link to="/excersise_6">Ex6</Link>
          </li>
          <li>
            <Link to="/excersise_12">Ex12</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/excersise_3"></Route>
          <Route path="/excersise_0"></Route>
          <Route path="/excersise_1"></Route>

          <Route path="/excersise_4">
            <Ex4 />
          </Route>
          <Route path="/excersise_5">
            <Ex5 />
          </Route>
          <Route path="/excersise_6">
            <Ex6 />
          </Route>
          <Route path="/excersise_12">
            <Ex12 />
          </Route>
          <Route path="/topics"></Route>
          <Route path="/excersise_2"></Route>
          <Route path="/homework_1"></Route>
          <Route path="/homework_2"></Route>
          <Route path="/homework_3"></Route>
          <Route path="/"></Route>
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
