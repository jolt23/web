import React, { useState } from 'react'

interface NavigationProps {
  activeSection: string
  onNavigate: (id: string) => void
}

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  const showName = activeSection !== 'home'
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (section: string) => {
    onNavigate(section)
    setMenuOpen(false)
  }

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className={`nav-name ${showName ? 'visible' : ''}`}>
          Joel Guilarte
        </div>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <button
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${
                activeSection === 'about' ? 'active' : ''
              }`}
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${
                activeSection === 'contact' ? 'active' : ''
              }`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
