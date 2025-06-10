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
              <p>Built on a <span className="highlight">24-year career</span> spanning board-level leadership, luxury asset management, corporate operations, and private wealth, I harness this experience to <span className="highlight">build and deploy next-generation solutions</span> in complex, regulated environments.
              </p>
              <p>
                Current projects integrate <span className="highlight">full stack</span> and <span className='highlight'>machine learning solutions</span> (Python, React, Django, TensorFlow, Docker &amp; GCP). They blend fresh technical capability with <span className="highlight">corporate governance and commercial strategy</span>, capitalising data in <span className="highlight">complex, regulated environments</span>.
              </p>

              <p>
                <span className="highlight">Inspired by the extraordinary pace of technological innovation</span> the recent surge in AI capabilities has fundamentally transformed how <span className="highlight">data-driven decisions</span> are made and how businesses operate. This new frontier has ignited a passion to deliver impactful, efficient, and forward-thinking technologies that benefit society and our planet.
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
