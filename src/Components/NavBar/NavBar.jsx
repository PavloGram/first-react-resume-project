import React from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className=" container nav">
      <img alt="logo" src={logo} className="logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <a href="lm">Program</a>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutus">About us</NavLink>
        </li>
        <li className="nav-item">
          <a href="m">Campus</a>
        </li>
        <li className="nav-item">
          <a href="m">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="m ">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
