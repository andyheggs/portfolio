import React from "react";
import "./Insights.css";
import Insights_Data from "../../assets/insights_data";
import arrow_icon from "../../assets/arrow_icon.svg";

// Insights component displays the section of insights cards
const Insights = () => {
  return (
    <div id="insights" className="insights">
      {/* Title section */}
      <div className="insights-title">
        <h1>Insights</h1>
      </div>

      <div className="section">
        <div className="insights-container">
          {/* Render the first 4 insights from Insights_Data */}
          {Insights_Data.slice(0, 4).map((item, index) => (
            <div key={index} className="insights-format">
              {/* Serial number */}
              <h3>{item.s_no}</h3>
              {/* Name/title */}
              <h2>{item.s_name}</h2>
              {/* Description */}
              <p>{item.s_desc}</p>

              {/* "Read More" link: opens insights page in a new tab */}
              <a
                href="/insights"
                target="_blank"
                rel="noopener noreferrer"
                className="insights-readmore"
              >
                <span style={{ color: "grey" }}>Read More</span>
                <img src={arrow_icon} alt="Arrow icon for read more" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
