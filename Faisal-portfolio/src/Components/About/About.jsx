
import React from "react";
import { Code2, Database, Server, GraduationCap } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-heading">
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <div className="about-line"></div>
      </div>

      <div className="about-container">

        <div className="about-left">
          <div className="about-icon">
            <Code2 size={65} />
          </div>
          <h3>Backend Development</h3>
          <p>Building the logic behind powerful applications.</p>
        </div>

        <div className="about-right">
          <h3>I'm Muhammad Faisal Iqbal</h3>

          <h4>
            Junior <span>Backend Developer</span>
          </h4>

          <p>
            I am a passionate Junior Backend Developer interested
            in building efficient, secure and reliable backend
            applications. I enjoy working with server-side
            technologies and solving programming problems.
          </p>

          <p>
            My technical skills include Java, Spring Boot,
            MySQL and C++. I am focused on improving my
            development skills and creating practical software
            solutions.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <Server />
              <div>
                <h5>Backend Development</h5>
                <p>Server-side programming</p>
              </div>
            </div>

            <div className="about-feature">
              <Database />
              <div>
                <h5>Database Management</h5>
                <p>MySQL database solutions</p>
              </div>
            </div>

            <div className="about-feature">
              <Code2 />
              <div>
                <h5>Programming</h5>
                <p>Java and C++</p>
              </div>
            </div>

            <div className="about-feature">
              <GraduationCap />
              <div>
                <h5>Continuous Learning</h5>
                <p>Learning and growing every day</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
