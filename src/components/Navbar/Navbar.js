import React from "react";
import "../../styles/Header.css";

const Navbar = (props) => (
  <nav className="navbar-brand">
      <div className="score">
        Score: {props.score} | Top Score: {props.topscore}
      </div>
  </nav>
);

export default Navbar;