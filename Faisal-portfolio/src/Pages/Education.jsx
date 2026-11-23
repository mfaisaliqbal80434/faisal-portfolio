
import React from "react";
import {
  GraduationCap,
  BookOpen,
  CalendarDays,
  Award,
  School,
  University,
} from "lucide-react";
import "./Educations.css";

function Education() {
const education = [
  {
    level: "01",
    title: "Bachelor's Degree",
    qualification: "Bachelor of Science in Computer Science (BSCS)",
    institute: "University of Kamalia",
    year: "Currently In Progress",
    status: "In Progress",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science, focusing on programming, software development and computer science fundamentals.",
    icon: University,
  },
  {
    level: "02",
    title: "Intermediate",
    qualification: "FSc (Faculty of Science)",
    institute: "PST College, Kamalia",
    year: "2023 – 2024",
    status: "Completed",
    description:
      "Successfully completed Intermediate education in the Faculty of Science.",
    icon: School,
  },
];

  return (
    <section className="education-section">
      <div className="education-container">

        <div className="education-heading">
          <span className="education-subtitle">ACADEMIC BACKGROUND</span>
          <h1>
            My <span>Education</span>
          </h1>
          <p>
            My academic journey, qualifications and continuous learning.
          </p>
        </div>

        <div className="education-layout">

          <div className="education-intro">
            <div className="education-intro-icon">
              <BookOpen size={32} />
            </div>

            <span className="education-label">MY JOURNEY</span>
            <h2>Learning Today, Building Tomorrow.</h2>

            <p>
              I am continuously developing my knowledge and technical
              skills through academic education and practical learning.
              My goal is to grow as a skilled backend developer.
            </p>

            <div className="education-stats">
              <div>
                <Award size={20} />
                <span>Academic Growth</span>
              </div>
              <div>
                <GraduationCap size={20} />
                <span>Continuous Learning</span>
              </div>
            </div>
          </div>

          <div className="education-timeline">
            {education.map((item) => {
              const Icon = item.icon;

              return (
                <div className="education-card" key={item.level}>
                  <div className="education-timeline-dot"></div>

                  <div className="education-card-top">
                    <div className="education-card-icon">
                      <Icon size={25} />
                    </div>

                    <span
                      className={`education-status ${
                        item.status === "In Progress"
                          ? "in-progress"
                          : "completed"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <span className="education-card-level">
                    {item.title}
                  </span>

                  <h3>{item.qualification}</h3>

                  <h4>{item.institute}</h4>

                  <div className="education-year">
                    <CalendarDays size={15} />
                    <span>{item.year}</span>
                  </div>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
