import React from "react";
import "./Hero.css";

const Hero = () => {
  const handleGetInTouchClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text slide-in-left">
          <h1>Hi, I'm Anton Nikitin</h1>
          <h2>Unity & Unreal Engine Developer</h2>
          <p>
            Motivated game programmer with 3 years of professional experience in
            VR development. Specializing in Unity and Unreal Engine with strong
            development skills.
          </p>
          <div className="hero-buttons">
            <a
              href="#contact"
              className="primary-button"
              onClick={handleGetInTouchClick}
            >
              Get in Touch
            </a>
            <a href="/resume" className="secondary-button">
              View Resume
            </a>
          </div>
          <div className="hero-skills slide-in-up">
            <h3>Tech Stack</h3>
            <div className="skills-grid">
              <div className="skill-item">Unity</div>
              <div className="skill-item">C#</div>
              <div className="skill-item">Unreal Engine</div>
              <div className="skill-item">C++</div>
              <div className="skill-item">VR Development</div>
              <div className="skill-item">Sound Design</div>
            </div>
          </div>
        </div>
        <div className="hero-image slide-in-right">
          <img src="/Picture.jpg" alt="Anton Nikitin" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
