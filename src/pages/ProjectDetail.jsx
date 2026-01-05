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
        <Link to="/" className="btn btn-link mb-3 ps-0" style={{textDecoration:"none"}}>
          ← Back to home
        </Link>

        <h2 className="mb-4">{project.title}</h2>

        {/* Main image */}
        <div className="mb-4 ratio ratio-16x9">
          <img
            src={project.image}
            alt={project.title}
            className="project-image rounded-0"
          />
        </div>

        <p className="mb-4">{project.description}</p>

        {/* Optional image gallery */}
        {project.images && (
          <>
            <h5 className="mb-3">Project Screenshots</h5>
            <div className="row g-3 mb-4">
              {project.images.map((img, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="ratio ratio-16x9">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="project-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

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
