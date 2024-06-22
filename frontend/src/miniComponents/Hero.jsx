import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Generosity</h1>
        <h3>Make a Difference</h3>
        <p>
          Your support can change lives. Join us in our mission to help those in need.
          Every donation makes a significant impact. Together, we can create a brighter future.
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
