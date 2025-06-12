import React from 'react'
import './About.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="section">
        <div className="about-sections">
          <div className="about-right">
            <div className="about-para">
              <p>
                A <span className="highlight">software developer</span> &amp; <span className='highlight'>data scientist</span>, passionately focused on intuitive and efficient solutions that enhance <span className="highlight"> individual</span> productivity and <span className="highlight">business success</span>.
              </p>
              <p>Leveraging a <span className="highlight">24-year career</span> spanning board-level leadership, luxury asset management, corporate operations, and private wealth, I pair <span className="highlight">business-oriented perspective</span> with <span className="highlight">data-led</span> strategy to deliver secure solutions in complex, regulated environments.
              </p>
              <p>
                <span className="highlight">Inspired by the extraordinary pace of technological innovation</span> recent projects blend full-stack engineering with machine-learning pipelines, using Python, React, Django and GCP.</p>
              <p>From project scoping to production, I apply <span className="highlight">decision-science principles</span> to frame problems and quantify impact. Data are explored in <span className="highlight">Jupyter Notebooks</span>; models are refined through <span className="highlight">feature engineering</span> and <span className="highlight">hyper-parameter tuning</span>, then containerised in <span className="highlight">Docker</span> and deployed via a <span className="highlight">MLOps-driven workflow</span> to Google Cloud. PostgreSQL, BigQuery and MongoDB feed secure React front-ends backed by Django services.</p>
              <p>
                The rapid evolution of AI has led my mission: to ship scalable, ethical technologies that improve decision-making for businesses—and, ultimately, for society and the planet.
              </p>
            </div>
            <div className="about-action">
              <div className="about-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect</AnchorLink></div>
              <a
                className="about-resume"
                href="/cv.pdf"
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
