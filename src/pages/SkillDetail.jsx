import React from "react";
import { useParams, Link } from "react-router-dom";
import { skills } from "../data/skillsData";

const SkillDetail = () => {
  const { skillId } = useParams();
  const skill = skills.find((s) => s.id === skillId);

  if (!skill) {
    return (
      <div className="container py-5">
        <p>Skill not found.</p>
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
        <h2 className="mb-2">{skill.name}</h2>
        <p className="text-muted mb-4">Level: {skill.level}</p>
        <p>{skill.description}</p>

        {/* You can add more details here later:
            - tools used
            - mini code examples
            - experience notes etc. */}
      </div>
    </div>
  );
};

export default SkillDetail;
