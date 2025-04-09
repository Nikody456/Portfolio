import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="contact-icon"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" />
            </svg>
            <a href="mailto:AntonNikitin00@yahoo.com" className="contact-link">
              AntonNikitin00@yahoo.com
            </a>
          </div>
          <div className="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="contact-icon"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <a
              href="https://www.linkedin.com/in/anton-nikitin-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a
                href="#sections"
                onClick={() =>
                  document.querySelector('[data-section="unity"]')?.click()
                }
              >
                Unity Projects
              </a>
            </li>
            <li>
              <a
                href="#sections"
                onClick={() =>
                  document.querySelector('[data-section="unreal"]')?.click()
                }
              >
                Unreal Engine
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Skills Overview</h3>
          <div className="footer-skills">
            <span>Unity</span>
            <span>Unreal Engine</span>
            <span>C#</span>
            <span>C++</span>
            <span>VR Development</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Anton Nikitin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
