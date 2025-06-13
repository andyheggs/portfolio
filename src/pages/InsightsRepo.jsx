import React, { useEffect } from "react";
import Insights_Data from "../assets/insights_data";
import "../Components/Insights/Insights.css";
import "./InsightsRepo.css";

// InsightsRepo component - displays a list of insight articles
const InsightsRepo = () => {
  // Set the document title when the component mounts
  useEffect(() => {
    document.title = "Insights | Andy Heggs";
  }, []);

  return (
    // Main container for the insights repository
    <main className="insights-repo">
      {/* Main heading for the repository */}
      <h1 className="repo-title">Insight Articles</h1>
      {/* Container for the list of insights */}
      <div className="insights-list">
        {/* Map through Insights_Data to render each insight */}
        {Insights_Data.map((post, idx) =>
          // If the insight has a 'w_link', render it as a clickable link
          post.w_link ? (
            <a
              key={idx}
              href={post.w_link}
              className="insight-article-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {/* Article preview for linked insight */}
              <article className="repo-item">
                <header>
                  {/* Serial number / identifier */}
                  <time dateTime={post.s_no}>{post.s_no}</time>
                  {/* Title of the insight */}
                  <h2>{post.s_name}</h2>
                </header>
                {/* Insight description */}
                <p>{post.s_desc}</p>
                {/* Call-to-action for reading the full article */}
                <span className="repo-read">View full text</span>
              </article>
            </a>
          ) : (
            // If the insight does not have a link, just render the article preview
            <article key={idx} className="repo-item">
              <header>
                {/* Serial number / identifier */}
                <time dateTime={post.s_no}>{post.s_no}</time>
                {/* Title of the insight */}
                <h2>{post.s_name}</h2>
              </header>
              {/* Insight description */}
              <p>{post.s_desc}</p>
            </article>
          )
        )}
      </div>
    </main>
  );
};

export default InsightsRepo;
