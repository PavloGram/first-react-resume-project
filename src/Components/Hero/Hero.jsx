import React from "react";
import darkArrow from "../../images/dark-arrow.png"

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1 className="hero-title">
          We Ensure better education fora better world
        </h1>
        <p className="hero-description">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="hero-btn">Explore more <img src={darkArrow} alt="btn img" className="hero-img"/></button>
      </div>
    </div>
  );
}

export default Hero;
