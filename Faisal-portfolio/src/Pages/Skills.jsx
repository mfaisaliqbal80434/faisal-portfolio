
import React from "react";
import {
  Coffee,
  Database,
  Code2,
  Layers,
  Server,
  Terminal,
  Cpu,
  GitBranch
} from "lucide-react";

import "./Skills.css";

function Skills() {

  const skills = [
    {
      name: "Java",
      category: "Programming Language",
      description: "Writing clean and object-oriented code.",
      level: 85,
      icon: <Coffee />
    },
    {
      name: "Spring Boot",
      category: "Backend Framework",
      description: "Building backend applications and REST APIs.",
      level: 80,
      icon: <Layers />
    },
    {
      name: "MySQL",
      category: "Database Management",
      description: "Managing relational databases and SQL queries.",
      level: 85,
      icon: <Database />
    },
    {
      name: "C++",
      category: "Programming Language",
      description: "Problem solving and object-oriented programming.",
      level: 75,
      icon: <Terminal />
    }
  ];

  const otherSkills = [
    { name: "Backend Development", icon: <Server /> },
    { name: "Object Oriented Programming", icon: <Code2 /> },
    { name: "Database Concepts", icon: <Cpu /> },
    { name: "Version Control", icon: <GitBranch /> }
  ];

  return (
    <section className="skills-page">

      {/* Header */}

      <div className="skills-header">
        <span>MY EXPERTISE</span>
        <h1>Technical <span>Skills</span></h1>
        <div className="skills-underline"></div>
        <p>
          Technologies and tools I use to develop reliable
          backend applications and software solutions.
        </p>
      </div>

      {/* Skills Cards */}

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-box" key={skill.name}>

            <div className="skill-box-top">

              <div className="skill-box-icon">
                {skill.icon}
              </div>

              <span className="skill-index">
                0{index + 1}
              </span>

            </div>

            <h2>{skill.name}</h2>

            <span className="skill-category">
              {skill.category}
            </span>

            <p className="skill-description">
              {skill.description}
            </p>

            <div className="skill-level">

              <div className="skill-level-text">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Additional Skills */}

      <div className="other-skills">

        <div className="other-skills-heading">
          <span>WHAT I WORK WITH</span>
          <h2>Additional <span>Knowledge</span></h2>
        </div>

        <div className="other-skills-grid">

          {otherSkills.map((skill) => (

            <div className="other-skill-card" key={skill.name}>
              <div>{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>

          ))}

        </div>

      </div>

      {/* Bottom Text */}

      <div className="skills-footer-text">
        <Code2 />
        <p>
          Always learning new technologies and improving
          my backend development skills.
        </p>
      </div>

    </section>
  );
}

export default Skills;
