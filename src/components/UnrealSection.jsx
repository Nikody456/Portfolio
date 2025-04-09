import React from "react";
import "../styles/UnrealSection.css";
import "./Sections.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const UnrealSection = () => {
  const [leftSkillRef, isLeftVisible] = useIntersectionObserver();
  const [rightSkillRef, isRightVisible] = useIntersectionObserver();

  const projects = [
    {
      title: "VR Training Simulators",
      company: "JSA-Group",
      description:
        "Development of industrial safety VR training simulators using Unreal Engine. Coputer Vision integration for object detection and interaction.",
      responsibilities: [
        "OpenCV integration",
        "VR interaction systems development",
        "Performance optimization",
        "Integration with existing systems",
        "Blueprint and C++ implementation",
      ],
      tech: ["Unreal Engine 5", "C++", "Blueprint", "VR Development", "OpenCV"],
      links: [
        {
          url: "https://jsa-group.ru/vr",
          icon: "website",
          label: "Website",
        },
      ],
    },
    {
      title: "Newt",
      description:
        "An audience college award winning Unreal Engine 4 game in 3D made by a team of 12 people. Players solve puzzles and discover the secrets of an ancient underground civilization with the help of a shape-shifting salamander.",
      role: "Gameplay Programmer",
      responsibilities: [
        "Core gameplay mechanics implementation",
        "Animation programming",
        "Music integration",
        "Puzzle system development",
      ],
      tech: ["Unreal Engine 4", "C++", "Blueprint", "Animation Systems"],
      links: [
        {
          url: "https://helpinghandstudios.wixsite.com/home",
          icon: "website",
          label: "Website",
        },
        {
          url: "https://kaliannee.itch.io/newt",
          icon: "gamepad",
          label: "Game Page",
        },
      ],
    },
  ];

  const skills = [
    {
      category: "Core Skills",
      items: [
        "C++ Programming",
        "Blueprint Visual Scripting",
        "VR Development",
        "Performance Optimization",
        "OpenCV Integration",
      ],
    },
    {
      category: "Engine Systems",
      items: [
        "Animation Systems",
        "Physics Simulation",
        "Level Design",
        "Audio Integration",
      ],
    },
  ];

  return (
    <section className="section unreal-section">
      <h2>Unreal Engine Experience</h2>

      <div className="skills-section">
        <h3>Technical Expertise</h3>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
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
                {skillGroup.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              {project.links && (
                <div className="project-links">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title={link.label}
                    >
                      {link.icon === "website" && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      )}
                      {link.icon === "github" && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      {link.icon === "youtube" && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      )}
                      {link.icon === "gamepad" && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {project.company && <h4>{project.company}</h4>}
            <p>{project.description}</p>
            {project.role && (
              <p>
                <strong>Role:</strong> {project.role}
              </p>
            )}
            <h5>Key Responsibilities:</h5>
            <ul>
              {project.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnrealSection;
