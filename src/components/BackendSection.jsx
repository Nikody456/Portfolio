import React from 'react'
import './Sections.css'

const BackendSection = () => {
  const projects = [
    {
      title: "Photo Gallery Web Application",
      description: "A React-based website with multiple features provided by Materialize framework.",
      responsibilities: [
        "Designed and implemented the full-stack architecture",
        "Built responsive UI components using React and Materialize",
        "Implemented backend API endpoints and database integration",
        "Deployed and maintained the application infrastructure"
      ],
      tech: ["React", "Node.js", "Materialize", "RESTful APIs"]
    },
    {
      title: "3D Art Cultural Heritage Application",
      company: "Minneapolis Institute of Art",
      description: "Unity 3D application for displaying cultural heritage objects using specialized shaders.",
      responsibilities: [
        "Developed backend services for 3D model management",
        "Implemented RESTful APIs for art object data",
        "Created specialized shaders for art visualization",
        "Worked in an Agile/Scrum environment with weekly client reports"
      ],
      tech: ["Unity 3D", "C#", "RESTful APIs", "Agile/Scrum"]
    }
  ]

  const skills = [
    {
      category: "Architecture",
      items: [
        "Modular System Design",
        "API Development",
        "Database Design",
        "Microservices"
      ]
    },
    {
      category: "Technologies",
      items: [
        "Node.js",
        "RESTful APIs",
        "SQL Databases",
        "Version Control (Git)"
      ]
    },
    {
      category: "Best Practices",
      items: [
        "Clean Code",
        "Documentation",
        "Testing",
        "Performance Optimization"
      ]
    }
  ]

  return (
    <section className="section backend-section">
      <h2>Backend Development</h2>
      
      <div className="skills-section">
        <h3>Core Competencies</h3>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
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
            <h3>{project.title}</h3>
            {project.company && <h4>{project.company}</h4>}
            <p>{project.description}</p>
            <h5>Key Responsibilities:</h5>
            <ul>
              {project.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BackendSection 