import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";

function NavBar() {
  const [stiky, setStiky] = useState(true);

  const handleScroll = () => {
    setStiky(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={` container nav ${stiky > 200 && "dark-nav"} `}>
      <img alt="logo" src={logo} className="logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="program" smooth={true} offset={0} duration={500} href="lm">Program</Link>
        </li>
        <li className="nav-item">
          <Link to="about" smooth={true} offset={0} duration={500} >About us</Link>
        </li>
        <li className="nav-item">
          <Link to="campus" smooth={true} offset={0} duration={500} href="m">Campus</Link>
        </li>
        <li className="nav-item">
          <Link to="testimonials" smooth={true} offset={0} duration={500} href="m">Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link  to="contact">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
