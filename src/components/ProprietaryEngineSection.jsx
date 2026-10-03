import React from "react";
import "./Sections.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ProprietaryEngineSection = () => {
  const [leftSkillRef, isLeftVisible] = useIntersectionObserver();
  const [rightSkillRef, isRightVisible] = useIntersectionObserver();

  const skills = [
    {
      category: "Core Skills",
      items: [
        "C++ Game Development",
        "Gameplay Programming",
        "UI Implementation",
        "Live Game Development",
        "Performance Optimization",
      ],
    },
    {
      category: "Production Systems",
      items: [
        "Proprietary Game Engine",
        "Visual Scripting",
        "Analytics Integration",
        "A/B Testing",
        "Feature Integration",
      ],
    },
  ];

  const project = {
    title: "Township",
    company: "Playrix",
    role: "Game Developer",
    description:
      "Worked on Township in a feature development team, implementing and shipping production game features using C++ and Playrix's proprietary game engine.",
    responsibilities: [
      "Shipped 5 production features end-to-end, from implementation through release and post-release support.",
      "Developed gameplay logic, UI, and feature systems using C++ and the company's proprietary engine.",
      "Integrated features with existing gameplay systems in a large production codebase.",
      "Implemented analytics and supported A/B testing for live game features.",
      "Collaborated with game designers, artists, and VFX specialists on production-ready implementations.",
      "Handled optimization, debugging, code reviews, builds, and production patches throughout the feature lifecycle.",
    ],
    tech: [
      "C++",
      "Proprietary Engine",
      "Gameplay",
      "UI",
      "Visual Scripting",
      "Analytics",
      "A/B Testing",
    ],
  };

  return (
    <section className="section proprietary-section">
      <h2>C++ / Proprietary Engine Experience</h2>

      <div className="skills-section">
        <h3>Technical Expertise</h3>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              ref={index === 0 ? leftSkillRef : rightSkillRef}
              className={`skill-group ${
                index === 0 && isLeftVisible
                  ? "slide-in-left"
                  : index === 1 && isRightVisible
                  ? "slide-in-right"
                  : ""
              }`}
            >
              <h4>{skillGroup.category}</h4>
              <ul>
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-header">
            <h3>{project.title}</h3>
            <div className="project-links">
              <a
                href="https://playrix.com/games/township"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                title="Website"
                aria-label="Township official website"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
          </div>
          <h4>{project.company}</h4>
          <p>{project.description}</p>
          <p>
            <strong>Role:</strong> {project.role}
          </p>
          <h5>Key Responsibilities:</h5>
          <ul>
            {project.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
          <div className="tech-stack">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProprietaryEngineSection;
