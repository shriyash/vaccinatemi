import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import "./App.css";

import Header from "./Components/Header"
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Header />

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route render={() => <div>404 Not Found</div>} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
