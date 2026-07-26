import React from 'react'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image-accent">
          <img
            src="/img/miami-city-center.jpg"
            alt="Miami City Center - Author: Pili Gonzalez Prieto"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
        <div className="hero-content-main">
          <div className="name-tag">
            <div className="name-tag-hello">HELLO</div>
            <div className="name-tag-subtitle">My Name is</div>
            <h1 className="name-tag-name">Joel Guilarte</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
