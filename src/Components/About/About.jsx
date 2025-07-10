import React from 'react'
import './About.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// About component displays personal introduction and links
const About = () => {
  return (
    // Main container with ID for anchor navigation
    <div id='about' className='about'>
      <div className="section">
        <div className="about-sections">
          <div className="about-right">
            <div className="about-para">
              {/* Introductory paragraph with highlighted roles and skills */}
              <p>
                I'm a <span className="highlight">software developer</span> &amp; <span className='highlight'>data scientist</span>, passionately focused on crafting intuitive solutions that enhance <span className="highlight"> individual</span> productivity and <span className="highlight">commercial performance</span>.
              </p>
              {/* Career summary with highlights on experience and approach */}
              <p>Leveraging a <span className="highlight">24-year career</span> spanning board-level leadership, luxury asset management, corporate operations, and private wealth, I pair <span className="highlight">business-oriented perspective</span> with <span className="highlight">data-led</span> strategy to deliver secure products in complex, regulated environments.
              </p>
              {/* Tech stack and current project focus */}
              <p>
                Recent projects blend full-stack engineering with machine-learning pipelines, using Python, React, Django and GCP.</p>
              {/* Workflow and tools used in data science and engineering */}
              <p>From scoping to production, I apply <span className="highlight">decision-science principles</span> to frame problems and quantify impact. Data are queried in <span className="highlight">SQL</span> and visualised in <span className="highlight">Jupyter</span>. Models are refined through <span className="highlight">feature engineering</span> and <span className="highlight">hyper-parameter tuning</span>, then containerised in <span className="highlight">Docker</span> and deployed via a <span className="highlight">MLOps-driven workflow</span> to Google Cloud. PostgreSQL, BigQuery and MongoDB feed secure React front-ends backed by Django services.</p>
              {/* Motivation for working in tech and AI */}
              <p>
                The rapid evolution of AI catalysed my move into tech, enabling an unbounded, top-down vision to solve problems and develop ethical technologies that improve decision-making for businesses—and, ultimately, for society and the planet.
              </p>
            </div>
            {/* Call-to-action section */}
            <div className="about-action">
              {/* Smooth-scroll link to the contact section */}
              <div className="about-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect</AnchorLink></div>
              {/* External link to resume/CV, opens in new tab */}
              <a
                className="about-resume"
                href="/Andrew_Heggs-Software_Engineer-CV-2025.pdf"
                target="_blank"
                title="Opens in a new tab"
                rel="noopener noreferrer"              >
                Resume
              </a>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
