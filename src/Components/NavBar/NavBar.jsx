import React from "react";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <nav className=" container nav">
      <img alt="logo" src={logo}  className="logo"/>
      <ul className="nav-list">
        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="lm">Program</a></li>
        <li className="nav-item"><a className="nav-link" href="m">About us</a></li>
        <li className="nav-item"><a className="nav-link" href="m">Campus</a></li>
        <li className="nav-item"><a className="nav-link" href="m">Testimonials</a></li>
        <li className="nav-item"><a className="nav-link" href="m ">Contact us</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
