import React from "react";
import darkArrow from "../../images/dark-arrow.png";

function Hero() {
  return (
    <section className="hero ">
      <div className="hero-text">
        <h1 className="hero-title">
          We Ensure better education fora better world
        </h1>
        <p className="hero-description">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="hero-btn">
          Explore more <img src={darkArrow} alt="" className="hero-img" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
