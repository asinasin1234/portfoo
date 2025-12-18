import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectData";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="container py-5">
        <p>Project not found.</p>
        <Link to="/" className="btn btn-outline-dark mt-2">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="section-light py-5">
      <div className="container">
        <Link to="/" className="btn btn-link mb-3 ps-0">
          ← Back to home
        </Link>

        <h2 className="mb-3">{project.title}</h2>
        <div className="mb-4 ratio ratio-16x9">
          <img
            src={project.image}
            alt={project.title}
            className="project-image rounded-0"
          />
        </div>

        <p className="mb-3">{project.description}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            View live demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
