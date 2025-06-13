import React, { useEffect } from "react";
import Insights_Data from "../assets/insights_data";
import "../Components/Insights/Insights.css";
import "./InsightsRepo.css";

// Functional component for the Insights repository
const InsightsRepo = () => {
  // Set document title when component mounts
  useEffect(() => {
    document.title = "Insights | Andy Heggs";
  }, []);

  return (
    <main className="insights-repo">
      {/* Repository main title */}
      <h1 className="repo-title">Insight Articles</h1>
      <div className="insights-list">
        {/* Render each insight as a link if w_link exists, similar to MyWork */}
        {Insights_Data.map((post, idx) =>
          post.w_link ? (
            <a
              key={idx}
              href={post.w_link}
              className="insight-article-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article className="repo-item">
                <header>
                  <time dateTime={post.s_no}>{post.s_no}</time>
                  <h2>{post.s_name}</h2>
                </header>
                <p>{post.s_desc}</p>
                <span className="repo-read">View full text</span>
              </article>
            </a>
          ) : (
            <article key={idx} className="repo-item">
              <header>
                <time dateTime={post.s_no}>{post.s_no}</time>
                <h2>{post.s_name}</h2>
              </header>
              <p>{post.s_desc}</p>
            </article>
          )
        )}
      </div>
    </main>
  );
};

export default InsightsRepo;
