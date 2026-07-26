import React from 'react'

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/joelguilarte"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/jolt23"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href="https://x.com/joel_guilarte"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <i className="fa-brands fa-x-twitter"></i>
            <span>X</span>
          </a>
          <a href="mailto:jguilarte@kartografer.io" className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}
