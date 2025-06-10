import React, { useEffect } from "react";
import mywork_data from "../assets/mywork_data";
import "./ProjectsRepo.css";

const ProjectsRepo = () => {
  /* Change browser‑tab title */
  useEffect(() => {
    document.title = "Projects | Andy Heggs";
  }, []);

  return (
    <main className="projects-repo">
      <h1 className="repo-title">Project Archive</h1>

      {mywork_data.map((proj, idx) => (
        <article key={idx} className="repo-item">
          {/* small fixed‑width column – project # */}
          <time dateTime={String(proj.w_no)}>{proj.w_no}</time>

          {/* project title + brief description */}
          <div>
            <h2>{proj.w_name}</h2>
            <p>{proj.w_desc}</p>
          </div>

          {/* view / demo link */}
          {proj.w_link && (
            <a
              href={proj.w_link}
              className="repo-read"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
            </a>
          )}
        </article>
      ))}
    </main>
  );
};

export default ProjectsRepo;
