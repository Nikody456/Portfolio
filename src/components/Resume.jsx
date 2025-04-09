import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-header">
          <h1>Resume</h1>
          <a 
            href="/Resume_Anton_Nikitin.pdf" 
            download 
            className="download-button"
          >
            Download PDF
          </a>
        </div>
        <div className="resume-content">
          <iframe
            src="/Resume_Anton_Nikitin.pdf"
            title="Resume"
            className="resume-viewer"
          />
        </div>
      </div>
    </div>
  )
}

export default Resume 