
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Mail,

  MapPin,
  Send,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const email = "mfaisaliqbal80434@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h1>
            Let's <span>Connect</span>
          </h1>
          <p>
            Have a project idea or want to discuss an opportunity?
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">
            <span className="contact-label">CONTACT INFORMATION</span>
            <h2>Let's start a conversation.</h2>

            <p className="contact-description">
              I'm always interested in discussing new projects,
              creative ideas and opportunities to grow.
            </p>

            <a href={`mailto:${email}`} className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>
              <div>
                <span>Email Me</span>
                <h3>{email}</h3>
              </div>
              <ArrowUpRight className="contact-arrow" size={19} />
            </a>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <span>Location</span>
                <h3>Pakistan</h3>
              </div>
            </div>

            <div className="contact-socials">
              <span>FOLLOW ME</span>

              <div className="social-links">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={21} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={21} />
                </a>

                <a
                  href={`mailto:${email}`}
                  aria-label="Email"
                >
                  <Mail size={21} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-heading">
              <div className="form-icon">
                <MessageCircle size={23} />
              </div>
              <div>
                <h2>Send Me a Message</h2>
                <p>I'll be happy to hear from you.</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>

        <div className="contact-bottom">
          <p>Have a great idea? Let's build something meaningful.</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
