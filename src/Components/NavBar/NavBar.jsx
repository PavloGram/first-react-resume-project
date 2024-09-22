import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import CloseIcon from "../../UI/CloseIcon";
import MenuIcon from "../../UI/MenuIcon";

function NavBar() {
  const [stiky, setStiky] = useState(true);
  const [mobMenuToggle, setMobMenuToggle] = useState(false);

  const handleScroll = () => {
    setStiky(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className={` nav ${stiky > 200 && "dark-nav"} `}>
        <img alt="logo" src={logo} className="logo" />
        <button
          type="button"
          className="mob-menu-btn"
          onClick={() => setMobMenuToggle(!mobMenuToggle)}
        >
          <CloseIcon hiddenIcon={!mobMenuToggle && "hidden-icon"} />

          <MenuIcon hiddenIcon={mobMenuToggle && "hidden-icon"} />
        </button>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link
              to="programs"
              smooth={true}
              offset={-250}
              duration={500}
              href="lm"
            >
              Program
            </Link>
          </li>
          <li className="menu-item">
            <Link to="about" smooth={true} offset={-250} duration={500}>
              About us
            </Link>
          </li>
          <li className="menu-item">
            <Link
              to="campus"
              smooth={true}
              offset={-250}
              duration={500}
              href="m"
            >
              Campus
            </Link>
          </li>
          <li className="menu-item">
            <Link
              to="testimonials"
              smooth={true}
              offset={-250}
              duration={500}
              href="m"
            >
              Testimonials
            </Link>
          </li>
          <li className="menu-item">
            <Link to="contact" smooth={true} offset={-250} duration={500}>
              Contact us
            </Link>
          </li>
        </ul>
        <div className="mob-menu-container">
          <ul className={`mob-menu-list ${mobMenuToggle && "is-open"}`}>
            <li className="mob-menu-item">
              <Link
                onClick={() => setMobMenuToggle(false)}
                to="hero"
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="mob-menu-item">
              <Link
                onClick={() => setMobMenuToggle(false)}
                to="programs"
                smooth={true}
                offset={-250}
                duration={500}
                href="lm"
              >
                Program
              </Link>
            </li>
            <li className="mob-menu-item">
              <Link
                onClick={() => setMobMenuToggle(false)}
                to="about"
                smooth={true}
                offset={-250}
                duration={500}
              >
                About us
              </Link>
            </li>
            <li className="mob-menu-item">
              <Link
                onClick={() => setMobMenuToggle(false)}
                to="campus"
                smooth={true}
                offset={-250}
                duration={500}
                href="m"
              >
                Campus
              </Link>
            </li>
            <li className="mob-menu-item">
              <Link
                onClick={() => setMobMenuToggle(false)}
                to="testimonials"
                smooth={true}
                offset={-250}
                duration={500}
                href="m"
              >
                Testimonials
              </Link>
            </li>
            <li className="mob-menu-item">
              <Link
                onClick={() => setMobMenuToggle(false)}
                to="contact"
                smooth={true}
                offset={-250}
                duration={500}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
