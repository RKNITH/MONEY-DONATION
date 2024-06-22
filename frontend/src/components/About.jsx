import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
            Generosity began with a simple yet powerful idea: to make a
            difference in the lives of those in need through collective action.
            Our founders, driven by a passion for helping others, set out to
            create a platform where anyone could contribute to meaningful
            change. Over the years, we have grown into a community of dedicated
            individuals who believe in the power of giving and the impact it
            can have on the world. From humble beginnings, we have expanded our
            reach and deepened our impact, always guided by our core values of
            compassion, transparency, and accountability. Join us in our
            journey to make the world a better place, one act of generosity at a
            time.
          </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
