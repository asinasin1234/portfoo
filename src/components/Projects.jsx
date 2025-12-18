import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projectData";

const Projects = () => {
  return (
    <section id="projects" className="py-5 section-dark">
      <div className="container">
        <div className="section-title-box mb-4 text-center">
          <span className="section-title-border"></span>
          <h3 className="section-title text-light">Projects</h3>
        </div>

        <p className="text-center text-light mb-4">
          A few things I&apos;ve been working on. Click a project to see more
          details.
        </p>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card project-card h-100">
                <div className="ratio ratio-16x9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">
                    {project.shortDescription}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-outline-dark mt-2 align-self-start"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-light mt-4 mb-0 small">
          And many more to come!
        </p>
      </div>
    </section>
  );
};

export default Projects;
