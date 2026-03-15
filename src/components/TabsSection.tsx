import React from 'react'

export default function TabsSection() {
  return (
    <section className="section uk-section page-2">
      <div className="uk-container">
        <div className="uk-position-medium tab">
          <ul className="uk-flex-center" data-uk-tab="connect: #content-list">
            <li>
              <a className="uk-text-large" href="#about">
                About
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="uk-height-medium">
          <ul id="content-list" className="uk-switcher">
            <li>
              <div
                id="about-me"
                className="toggle-me uk-grid-small uk-child-width-expand@s uk-flex-center uk-margin-remove-left"
                data-uk-grid=""
              >
                <div className="uk-text-justi">
                  <p>
                    I enjoy solving problems through software and automation. In
                    the past few years I have been trying to bridge the gap
                    between infrastructure teams and development teams. Trying
                    to fill these gaps has taught me alot of about how important
                    team structure and organization structure is so crucial to
                    building successful software solutions.
                  </p>
                </div>
                <div className="uk-text-justi">
                  <p>
                    Currently, I am a consulant for Ernst &amp; Young,
                    specialzing in Cloud Architecture and DevOps. I have helped
                    clients shift to a culture of repid development on the cloud
                    by leverging DevOps. In our implementations we seek to help
                    teams implement CI/CD tools. Above all DevOps is a culture
                    shift from traditional IT operations.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div
                id="contact-me"
                className="toggle-me uk-grid-small uk-child-width-expand@s uk-flex-center uk-text-center uk-margin-remove-left"
                data-uk-grid=""
              >
                <div>
                  <a
                    href="https://www.linkedin.com/in/joelguilarte"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin fa-5x" aria-hidden="true"></i>
                  </a>
                  <div>
                    <p className="fa-social">LinkedIn</p>
                  </div>
                </div>
                <div>
                  <a
                    href="https://github.com/jolt23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-github-alt fa-5x"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <div>
                    <p className="fa-social">GitHub</p>
                  </div>
                </div>
                <div>
                  <a href="https://twitter.com/intent/follow?screen_name=joel_guilarte">
                    <i className="fab fa-twitter fa-5x" aria-hidden="true"></i>
                  </a>
                  <div>
                    <p className="fa-social">Twitter</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="uk-position-medium uk-position-bottom">
          <footer className="uk-text-center ">
            <i className="fas fa-envelope-open-text"></i>
            Email: <a href="mailto:joel@tailormade.systems">Joel Guilarte</a>
          </footer>
        </div>
      </div>
    </section>
  )
}
