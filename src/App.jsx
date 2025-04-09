import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UnitySection from "./components/UnitySection";
import UnrealSection from "./components/UnrealSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import ScrollToTop from "./components/ScrollToTop";
import { initScrollReveal, addRevealClass } from "./components/ScrollReveal";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainContent() {
  const [activeSection, setActiveSection] = useState("unity");

  const scrollToSection = () => {
    const section = document.querySelector(".sections");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    scrollToSection();
  };

  useEffect(() => {
    // Initialize scroll reveal animations
    addRevealClass();
    initScrollReveal();

    // Ensure scroll position is at top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <ScrollToTopOnMount />
      <Header
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />
      <main>
        <Hero />
        <div className="sections" id="sections">
          {activeSection === "unity" ? <UnitySection /> : <UnrealSection />}
        </div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function ResumePage() {
  useEffect(() => {
    // Scroll to top on resume page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <ScrollToTopOnMount />
      <Header />
      <Resume />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
