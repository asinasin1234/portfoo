// src/components/Hero.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/hero.css"; // we'll create this
import profileImg from "../assets/profile.jpg"; // change path/name to your image

const Hero = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="container-fluid px-0">
        <div className="row g-0">
          {/* LEFT TEXT SIDE */}
          <div className="col-lg-6 hero-left d-flex align-items-center">
            <div className="hero-text ms-lg-5 ps-lg-5">
              <p className="hero-eyebrow">HI, I AM</p>
              <h1 className="hero-name">Asin A</h1>
              <p className="hero-role">FULL STACK DEVELOPER</p>

              <p className="hero-description">
                I build clean, minimal web applications with the MERN stack,
                focusing on simple UX and readable code.
              </p>

              <div className="hero-icons d-flex gap-3 mt-4">
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-icon-link"
                >
                  <i className="bi bi-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-icon-link"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/your-instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-icon-link"
                >
                  <i className="bi bi-instagram" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE + BLACK DIAGONAL */}
          <div className="col-lg-6 hero-right position-relative">
            <div className="hero-diagonal" />
            <img
              src={profileImg}
              alt="Asin A"
              className="hero-photo img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
