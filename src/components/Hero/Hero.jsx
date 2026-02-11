import React from "react";
import "./Hero.css";
import arrow_right from "../../assets/arrow_right.svg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better warld</h1>
        <p>
          Our cutting-esge carriculm is designed to empower students with the
          knowledge , skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Exprole more <img src={arrow_right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
