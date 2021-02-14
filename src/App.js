import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Switch>
        <div className="container">
          <p> Let's add routing! </p>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
