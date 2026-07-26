import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section')
      let current = 'home'

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.scroll-section')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <div id="home" className="scroll-section">
        <Hero />
      </div>
      <div id="about" className="scroll-section">
        <About />
      </div>
      <div id="contact" className="scroll-section">
        <Contact />
      </div>
      <footer className="site-footer">
        <p>&copy; {currentYear} joel guilarte. All rights reserved.</p>
        <p className="photo-credit">
          Photo by{' '}
          <a
            href="https://unsplash.com/@piligonzalezprieto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Pili Gonzalez Prieto
          </a>
        </p>
      </footer>
    </div>
  )
}
