import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import UnitySection from './components/UnitySection'
import UnrealSection from './components/UnrealSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume'
import ScrollToTop from './components/ScrollToTop'

function MainContent() {
  const [activeSection, setActiveSection] = useState('unity')

  const scrollToSection = () => {
    const section = document.querySelector('.sections')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSectionChange = (section) => {
    setActiveSection(section)
    scrollToSection()
  }

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={handleSectionChange} />
      <main>
        <Hero />
        <div className="sections" id="sections">
          {activeSection === 'unity' && <UnitySection />}
          {activeSection === 'unreal' && <UnrealSection />}
        </div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function ResumePage() {
  return (
    <div className="app">
      <Header />
      <Resume />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  )
}

export default App
