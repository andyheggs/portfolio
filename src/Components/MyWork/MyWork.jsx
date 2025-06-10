import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const latestWork = mywork_data
  .sort((a, b) => a.w_no - b.w_no)
  .slice(0, 3);

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>- Latest Work -</h1>
      </div>
      <div className="section">
        <div className="mywork-list">
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
                <img className="mywork-project-img" src={work.w_img} alt={work.w_name} />
                <div className="mywork-project-desc">
                  <h2>{work.w_name}</h2>
                  <p>{work.w_desc}</p>
                </div>
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
