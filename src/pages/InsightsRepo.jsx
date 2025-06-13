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

      {/* Map through Insights_Data and render each post */}
      {Insights_Data.map((post, idx) => (
        <article key={idx} className="repo-item">
          <header>
            {/* Display post number as a time element */}
            <time dateTime={post.s_no}>{post.s_no}</time>
            {/* Display post title */}
            <h2>{post.s_name}</h2>
          </header>

          {/* Display post description */}
          <p>{post.s_desc}</p>
          {/* External link to view full text of the article */}
          <a
            href={post.url ?? "https://arxiv.org/abs/2501.19267"}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-read"
          >
            View full text
          </a>
        </article>
      ))}
    </main>
  );
};


export default InsightsRepo;
