
import React from "react";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Hero.css";
import faisalImage from "../../assets/faisal.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-subtitle">
          <span></span> WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Muhammad Faisal</span>
          <br />
          Iqbal
        </h1>

        <h2>
          Junior <span>Backend Developer</span>
        </h2>

        <p className="hero-description">
          I am a passionate Junior Backend Developer interested in
          building reliable server-side applications, designing
          efficient databases and creating backend solutions using
          Java, Spring Boot and MySQL. I enjoy learning new
          technologies and improving my problem-solving skills.
        </p>

        <div className="hero-buttons">

          <Link to="/projects" className="hero-btn primary-btn">
            Explore Projects <ArrowRight size={18} />
          </Link>

          <Link to="/contact" className="hero-btn secondary-btn">
            Contact Me <Mail size={18} />
          </Link>

        </div>

        <div className="hero-socials">

          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>

          <a href="mailto:mfaisaliqbal80434@gmail.com" aria-label="Email">
            <Mail />
          </a>

        </div>

      </div>

      <div className="hero-image">

        <div className="hero-circle">

          <div className="profile-image-wrapper">
            <img
              src={faisalImage}
              alt="Muhammad Faisal Iqbal"
              className="profile-image"
            />
          </div>

          <div className="floating-badge badge-java">
            Java Developer
          </div>

          <div className="floating-badge badge-spring">
            Spring Boot
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
