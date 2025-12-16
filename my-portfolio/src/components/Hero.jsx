import React from "react";
import avatar from "../assets/une.mp4";
import "../styles/hero.css";
import "../styles/main.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-year" aria-hidden>ERONË'S</div>

      <div className="hero-inner">
        <div className="hero-stage">
          <div className="avatar-container">
            <video
              className="hero-avatar"
              src={avatar}
              autoPlay
              loop
              muted
              playsInline
              aria-label="Avatar video"
            >
              <source src={avatar} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        
        </div>
      </div>

      <div className="hero-portfolio">Portfolio</div>
    </section>
  );
};

export default Hero;
