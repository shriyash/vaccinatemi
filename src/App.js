import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink as Link,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer"

const App = () => {
  return (
    <Router>
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
}

export default App;
