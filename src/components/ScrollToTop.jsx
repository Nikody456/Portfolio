import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className={`scroll-to-top ${isVisible ? "visible" : ""}`}
          aria-label="Scroll to top"
        >
          <svg viewBox="0 0 24 24" fill="white" className="scroll-arrow">
            <path d="M12 4l-8 8h6v8h4v-8h6z" />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
