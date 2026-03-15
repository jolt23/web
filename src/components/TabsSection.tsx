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
                className="toggle-me uk-width-1-1 uk-margin-remove-left"
              >
                <div className="uk-container uk-padding-remove-left uk-padding-remove-right">
                  <p>
                    Some people separate work and life. I&apos;ve never really
                    managed that and I&apos;ve stopped trying. I take systems
                    apart to understand how they work, then put them back
                    together in ways that create real value. That&apos;s true
                    whether I&apos;m leading a cloud transformation, building a
                    developer platform, or figuring out how to keep two kids and
                    a packed travel schedule from falling apart at the seams. My
                    wife would say I treat everything like an engineering
                    problem. She&apos;s not wrong. I&apos;ve spent my career
                    scaling teams, driving platform and CI/CD transformations,
                    and now helping organizations navigate the shift to
                    AI-driven engineering — where the tools are smarter and the
                    pace is relentless. The same curiosity that pulls me into a
                    complex system is what draws me to the racetrack and to new
                    corners of the world with my family. Everything worth doing
                    has layers. I like finding them.
                  </p>
                  <p>
                    My background spans front-end, API development, and DevOps
                    with a current emphasis on building platform foundations
                    that enable teams to move faster and reduce operational
                    friction. I care deeply about mentoring and creating
                    engineering cultures where good outcomes are the natural
                    result of clear goals and the right tooling.
                  </p>
                  <p>
                    I&apos;m the Cloud Engineering and DevSecOps Competency
                    Leader within our Platform Engineering practice at Ernst
                    &amp; Young (EY), where I design cloud-native developer
                    platforms, reusable CI/CD pipelines, and DevSecOps practices
                    to accelerate delivery and improve resilience. Previously I
                    founded Kartografer LLC to help teams adopt DevOps and
                    automation, worked in multiple engineering and leadership
                    roles (including principal and senior engineering positions)
                    at Royal Caribbean across both staff and contract
                    engagements, co-founded Tailor Made Systems to deliver web
                    and backend solutions to small businesses, and served as a
                    senior software engineer at Chewy focusing on backend
                    services and asset pipelines. My career began in web
                    development at Royal Caribbean and has since centered on
                    platform engineering, automation, and scaling reliable
                    delivery for product teams.
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
                    <i
                      className="fa-brands fa-square-linkedin fa-5x"
                      aria-hidden="true"
                    ></i>
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
                      className="fa-brands fa-square-github fa-5x"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <div>
                    <p className="fa-social">GitHub</p>
                  </div>
                </div>
                <div>
                  <a
                    href="https://x.com/joel_guilarte"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa-brands fa-square-x-twitter fa-5x"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <div>
                    <p className="fa-social">X</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="uk-position-medium uk-position-bottom">
          <footer className="uk-text-center ">
            <i className="fas fa-envelope-open-text"></i>
            Email: <a href="mailto:jguilarte@kartografer.io">Joel Guilarte</a>
          </footer>
        </div>
      </div>
    </section>
  )
}
