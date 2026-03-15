import React from 'react'

export default function Hero() {
  return (
    <section className="section uk-section page-1">
      <div className="uk-container uk-text-center">
        <div
          className="uk-flex-center uk-position-medium uk-position-center"
          data-uk-grid=""
        >
          <div>
            <h1>HELLO</h1>
            <p>My Name is</p>
            <h1 className="opening-act-h1">joel Guilarte</h1>
          </div>
        </div>
        <div className="uk-position-bottom next-page-nav-button">
          <a href="#secondPage">
            <span className="bounce next-page-stack fa-stack fa-lg">
              <i
                className="fas fa-circle-notch fa-stack-2x"
                aria-hidden="true"
              ></i>
              <i
                className="fas fa-chevron-down fa-stack-1x"
                aria-hidden="true"
              ></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
