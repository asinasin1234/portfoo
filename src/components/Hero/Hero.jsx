import profile from "../../assets/profile.jpg";
import "./hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* LEFT SIDE */}
      <div className="hero-left animate-left">
        <span className="hero-small">HI, I AM</span>

        <h1 className="hero-name">Asin A</h1>

        <p className="hero-role">Full Stack Developer</p>

        <p className="hero-desc">
          I’m a full stack developer who loves building clean, modern web
          applications with React, Node.js, and MongoDB.
        </p>

        <div className="hero-socials">
          <a href="https://github.com/asinasin1234" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/asin-a-aba959274/" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_.assiiiiii____/" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right animate-right">
        <img
          src={profile}
          alt="Asin profile"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
