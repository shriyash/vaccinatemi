import React from "react";

import { NavLink as Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <h1> Vaccinate Michigan </h1>
      <p>
        A volunteer-led project to help you navigate the COVID-19 vaccination
        process in Michigan
      </p>
    </div>
  );
};

export default Header;
