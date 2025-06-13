import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

// MyWork component displays the latest work/projects
const MyWork = () => {
  // Sorts the work data by 'w_no' and selects the first 3 items
  const latestWork = mywork_data
  .sort((a, b) => a.w_no - b.w_no)
  .slice(0, 3);

  return (
    <div id='work' className='mywork'>
      {/* Section Title */}
      <div className="mywork-title">
        <h1>Latest Work</h1>
      </div>
      <div className="section">
        <div className="mywork-list">
          {/* Render the first 3 items from mywork_data as project links */}
          {mywork_data.slice(0, 3).map((work, index) => (
            <a
              key={index}
              href={work.w_link}
              className="mywork-project-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="mywork-project">
                {/* Project image */}
                <img className="mywork-project-img" src={work.w_img} alt={work.w_name} />
                {/* Project name and description */}
                <div className="mywork-project-desc">
                  <h2>{work.w_name}</h2>
                  <p>{work.w_desc}</p>
                </div>
                {/* List of technologies used in the project */}
                <ul className="mywork-tech-list" aria-label="Technologies used">
                  {work.w_tech && work.w_tech.map((tech, i) => (
                    <li key={i} className="mywork-tech-item">
                      <div className="mywork-tech-badge">{tech}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
          {/* Show More button linking to the projects page */}
          <a
            className="mywork-showmore"
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p>Show More</p>
            <img src={arrow_icon} alt=""/>
          </a>
      </div>
    </div>
  )
}

export default MyWork
