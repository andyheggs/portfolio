import React from "react";
import "./Insights.css";
import Insights_Data from "../../assets/insights_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Insights = () => {
  return (
    <div id="insights" className="insights">
      <div className="insights-title">
        <h1>- Insights -</h1>
      </div>

      <div className="section">
        <div className="insights-container">
          {Insights_Data.slice(0, 4).map((item, index) => (
            <div key={index} className="insights-format">
              <h3>{item.s_no}</h3>
              <h2>{item.s_name}</h2>
              <p>{item.s_desc}</p>

              {/* link opens the full repository page in a new tab */}
              <a
                href="/insights"
                target="_blank"
                rel="noopener noreferrer"
                className="insights-readmore"
              >
                <span style={{ color: "grey" }}>Read More</span>
                <img src={arrow_icon} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
