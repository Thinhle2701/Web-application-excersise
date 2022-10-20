import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Excersise3 from "./Component/Excersise_3/Ex3";
import Excersise2 from "./Component/Excersise_2/Ex2";
import Excersise0 from "./Component/Excersise_0/Ex0";
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/excersise_0">Excersise0</Link>
          </li>

          <li>
            <Link to="/excersise_2">Excersise2</Link>
          </li>
          <li>
            <Link to="/excersise_3">Excersise3</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/excersise_3">
            <Excersise3></Excersise3>
          </Route>
          <Route path="/excersise_0">
            <Excersise0 />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/excersise_2">
            <Excersise2 />
          </Route>
          <Route path="/">
            <Home />
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
