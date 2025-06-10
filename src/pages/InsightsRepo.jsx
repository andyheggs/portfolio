import React, { useEffect } from "react";
import Insights_Data from "../assets/insights_data";
import "../Components/Insights/Insights.css";
import "./InsightsRepo.css";


const InsightsRepo = () => {

  useEffect(() => {
    document.title = "Insights | Andy Heggs";
  }, []);
  return (
    <main className="insights-repo">
      <h1 className="repo-title">Insight Articles</h1>

      {Insights_Data.map((post, idx) => (
        <article key={idx} className="repo-item">
          <header>
            <time dateTime={post.s_no}>{post.s_no}</time>
            <h2>{post.s_name}</h2>
          </header>

          <p>{post.s_desc}</p>
          <a
            href={post.url ?? "#!"}
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
