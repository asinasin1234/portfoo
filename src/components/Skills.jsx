import React from "react";
import { Link } from "react-router-dom";
import { skills } from "../data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="py-5 section-light">
      <div className="container">
        <div className="section-title-box mb-4 text-center">
          <span className="section-title-border"></span>
          <h3 className="section-title">Skills</h3>
        </div>

        <p className="text-center mb-4">
          These are the technologies I work with. Click any skill to see more
          details.
        </p>

        <div className="row g-3">
          {skills.map((skill) => (
            <div key={skill.id} className="col-6 col-md-4 col-lg-3">
              <Link
                to={`/skills/${skill.id}`}
                className="skill-card text-decoration-none"
              >
                <div className="skill-card-inner text-center">
                  <div className="skill-icon-placeholder">
                    {skill.name[0]}
                  </div>
                  <h5 className="mt-2 mb-0">{skill.name}</h5>
                  <small className="text-muted">{skill.level}</small>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
