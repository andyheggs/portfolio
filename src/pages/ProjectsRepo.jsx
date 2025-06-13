import React, { useEffect } from "react";
import mywork_data from "../assets/mywork_data";
import "./ProjectsRepo.css";

// ProjectsRepo component displays an archive of project data
const ProjectsRepo = () => {
  // Set the browser tab's title when the component mounts
  useEffect(() => {
    document.title = "Projects | Andy Heggs";
  }, []);

  return (
    // Main container for the projects archive
    <main className="projects-repo">
      {/* Archive heading */}
      <h1 className="repo-title">Project Archive</h1>

      {/* Iterate over each project in the data array */}
      {mywork_data.map((proj, idx) => (
        // Individual project item
        <article key={idx} className="repo-item">
          {/* Small fixed-width column for project number */}
          <time dateTime={String(proj.w_no)}>{proj.w_no}</time>

          {/* Project title and description */}
          <div>
            <h2>{proj.w_name}</h2>
            <p>{proj.w_desc}</p>
          </div>

          {/* If the project has a link, display the "View project" button */}
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
