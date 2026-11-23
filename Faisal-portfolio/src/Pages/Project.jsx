
import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  
  ExternalLink,
  Database,
  Server,
  Code2,
  ArrowUpRight
} from "lucide-react";

import "./Projects.css";

function Project() {

  const projects = [
    {
      id: "01",
      title: "Student Management System",
      category: "Java Application",
      description:
        "A student management application designed to manage student records, information and academic data efficiently.",
      technologies: ["Java", "MySQL", "OOP"],
      icon: <Database />,
      github: "https://github.com/"
    },
    {
      id: "02",
      title: "REST API Development",
      category: "Backend Development",
      description:
        "A backend REST API concept for handling application requests, managing data and connecting with a database.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      icon: <Server />,
      github: "https://github.com/"
    },
    {
      id: "03",
      title: "Library Management System",
      category: "Database Application",
      description:
        "A library management application concept for managing books, records and library operations.",
      technologies: ["Java", "MySQL", "OOP"],
      icon: <Code2 />,
      github: "https://github.com/"
    }
  ];

  return (
    <section className="projects-page" id="projects">

      {/* Header */}

      <div className="projects-header">
        <span>MY RECENT WORK</span>

        <h1>My <span>Projects</span></h1>

        <div className="projects-line"></div>

        <p>
          Exploring backend development through programming,
          database management and software development.
        </p>
      </div>

      {/* Projects Grid */}

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <div className="project-card-top">

              <div className="project-icon">
                {project.icon}
              </div>

              <span>{project.id}</span>

            </div>

            <div className="project-category">
              {project.category}
            </div>

            <h2>{project.title}</h2>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-card-bottom">

               <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-github"
              >
                  <FaGithub size={18} />
                GitHub Code
              </a> 

              <ArrowUpRight className="project-arrow" />

            </div>

          </div>

        ))}

      </div>

      {/* Bottom Section */}

      <div className="projects-bottom">

        <h2>Interested in working together?</h2>

        <p>
          Let's build something meaningful with technology.
        </p>

        <a href="/contact" className="projects-contact-btn">
          Contact Me <ExternalLink size={17} />
        </a>

      </div>

    </section>
  );
}

export default Project;
