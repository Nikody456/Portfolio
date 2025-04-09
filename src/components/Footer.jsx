import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
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
                Unreal Projects
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
