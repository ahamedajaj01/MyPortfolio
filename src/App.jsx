import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import blogify from "./assets/blogify.png";
import complaintApp from "./assets/complaintApp.png";
import iNotebook from "./assets/iNotebook.png";
import fedback from "./assets/fedback.png";
import chatapp from "./assets/chatapp.png";
import MyResume from "./assets/My_Resume.pdf";
const templateId = import.meta.env.VITE_META_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_META_SERVICE_ID;
const publicKey = import.meta.env.VITE_META_PUBLIC_KEY;

function App() {
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    // Footer year update
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }, []);

  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, contactForm.current, publicKey)
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("Email send error:", err);
        alert("Failed to send message. Try again.");
      });
    e.target.reset();
  };

  return (
    <>
      {/* ========================== NAVBAR ============================= */}
      <nav className="nav-container">
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuActive(!menuActive)}
        >
          ☰
        </button>
        <div className="my-portfolio">
          <a href="#home">MyPortfolio</a>
        </div>
        <div className={`nav-content ${menuActive ? "active" : ""}`}>
          <ul className="ul-content">
            <div className="option">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
            <div className="resume">
              <li>
                <a href={MyResume}>Resume</a>
              </li>
            </div>
          </ul>
        </div>
      </nav>

      {/* ========================== HERO SECTION ============================= */}
      <main>
        <section className="hero" id="home">
          <div
            className="hero-content"
            style={{ marginTop: menuActive ? "100px" : "0" }}
          >
            <div className="my-image"></div>

            <div className="hero-text">
              <h2>Hi! I'm AJAJ AHAMED.</h2>
              <p style={{ fontSize: "large", fontWeight: 500 }}>
                <strong>- Fullstack Developer</strong>
              </p>
              <br />
              <p>
                A passionate fresher exploring
                <strong> Python (Django)</strong> and{" "}
                <strong>JavaScript</strong>, focused on building clean,
                responsive web experiences.
              </p>
              <a href="#contact">
                <button className="get-in-touch">Get in touch</button>
              </a>
              <a href="#project">
                <button className="browse-project">Browse Project</button>
              </a>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* ========================== ABOUT SECTION ============================= */}
        <section className="about-section" id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm Ajaj Ahamed, an enthusiastic Fullstack Developer passionate
              about creating responsive and user-friendly web applications.
            </p>
            <p>
              My main focus is on JavaScript, React, HTML, and CSS for the
              frontend, and I'm currently expanding my backend skills with
              Python and Django.
            </p>
            <p>
              I’m always eager to learn, explore new technologies, and
              collaborate on impactful projects that help me grow.
            </p>

            <div className="download-cv">
              <a href={MyResume}>Download CV</a>
            </div>
          </div>
        </section>

        {/* ========================== SKILLS SECTION ============================= */}
        <section className="skills-section" id="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            <div
              className="skill-box"
              data-tooltip="Web structure with semantic tags"
            >
              <i className="fab fa-html5" style={{ color: "#e34f26" }}></i> HTML
            </div>

            <div
              className="skill-box"
              data-tooltip="Responsive layouts, Flex/Grid, animations"
            >
              <i className="fab fa-css3-alt" style={{ color: "#1572b6" }}></i>{" "}
              CSS
            </div>

            <div
              className="skill-box"
              data-tooltip="Dynamic web functionality & DOM manipulation"
            >
              <i className="fab fa-js" style={{ color: "#f7df1e" }}></i>{" "}
              JavaScript
            </div>

            <div
              className="skill-box"
              data-tooltip="High-level programming language for automation, data science & web apps"
            >
              <i
                className="fa-brands fa-python"
                style={{ color: "#3776ab" }}
              ></i>{" "}
              Python
            </div>

            <div
              className="skill-box"
              data-tooltip="High-level Python web framework for rapid and secure web app development"
            >
              <i className="fa-solid fa-leaf" style={{ color: "#092e20" }}></i>{" "}
              Django
            </div>

            <div
              className="skill-box"
              data-tooltip="Structured Query Language used to manage and query relational databases"
            >
              <i
                className="fa-solid fa-database"
                style={{ color: "#f29111" }}
              ></i>{" "}
              SQL
            </div>

            <div
              className="skill-box"
              data-tooltip="Built SPA, components, hooks"
            >
              <i className="fab fa-react" style={{ color: "#61dafb" }}></i>{" "}
              React
            </div>

            <div
              className="skill-box"
              data-tooltip="Version control, collaboration"
            >
              <i className="fab fa-git-alt" style={{ color: "#f1502f" }}></i>{" "}
              Git & GitHub
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* ========================== PROJECTS SECTION ============================= */}
        <h2 style={{ marginLeft: "2.5rem" }} id="project">
          Projects
        </h2>
        <div className="project-container">
          {/* Project 1 */}
          <div className="project-grid">
            <div className="project-level-name">Full Stack MERN Project</div>
            <strong>- iNotebook - Book in Cloud</strong>
            <br />
            <div className="project-image">
              <img src={iNotebook} alt="iNotebook" />
            </div>
            <p>
              <strong>🛠️ Tech Stack:</strong> React, Node.js, Express, MongoDB
            </p>
            <p>Stay organized with iNotebook — a secure notes app.</p>
            <div className="project-view">
              <a href="https://i-notebook-beta-sable.vercel.app/">🔗 Live</a>
              <a href="https://github.com/ahamedajaj01/iNotebook">💻 Code</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-grid">
            <div className="project-level-name">Advanced Frontend Project</div>
            <strong>📝 Blogify – A Modern Blogging Platform</strong>
            <br />
            <div className="project-image">
              <img src={blogify} alt="Blogify" />
            </div>
            <p>
              <strong>🛠️ Tech Stack:</strong> React, Redux Toolkit, Appwrite,
              Tailwind
            </p>
            <p>A feature-rich blog platform with CRUD and authentication.</p>
            <div className="project-view">
              <a href="https://my-blog-ashy-phi.vercel.app">🔗 Live</a>
              <a href="https://github.com/ahamedajaj01/My-Blog">💻 Code</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-grid">
            <div className="project-level-name">
              Complaint Management Platform
            </div>
            <strong>🗂️ ComplaintApp</strong>
            <br />
            <div className="project-image">
              <img src={complaintApp} alt="ComplaintApp" />
            </div>
            <p>
              <strong>🛠️ Tech Stack:</strong> React, Redux Toolkit, Vite,
              Appwrite
            </p>
            <p>A full-stack complaint management app with admin panel.</p>
            <div className="project-view">
              <a href="https://complaintapp-five.vercel.app/login">🔗 Live</a>
              <a href="https://github.com/ahamedajaj01/complaintApp">💻 Code</a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-grid">
            <div className="project-level-name">Full-Stack Project</div>
            <strong>🚀 Django Feedback App</strong>
            <p>Python . Django . MySQL . Bootstrap5</p>
            <br />
            <div className="project-image">
              <img src={fedback} alt="feedbackApp" />
            </div>
            <p>
              A Django-based web application that allows users to submit
              feedback, view responses, and manage entries through an admin
              dashboard.
            </p>
            <div className="project-view">
              <a
                href="https://feedbackapp-production-d50a.up.railway.app/"
                className="disabled-link"
              >
                🔗 Live
              </a>
              <a
                href="https://github.com/ahamedajaj01/feedback_app"
                className="disabled-link"
              >
                💻 Code
              </a>
            </div>
          </div>
          {/* Project 5 */}
          <div className="project-grid">
            <div className="project-level-name">Full-Stack Project</div>
            <strong>Chat Application</strong>
            <p>React · Django · Django REST · WebSockets · Redis · PostgreSQL</p>
            <br />
            <div className="project-image">
              <img src={chatapp} alt="new project" />
            </div>
            <p>
              A full-stack chat application built with React and Django. The
              project demonstrates real-time communication, API integration,
              authentication, and backend–frontend separation. It was developed
              incrementally as part of my learning process, with a focus on
              understanding how production-style systems are structured.
            </p>
            <div className="project-view">
              <a
                href="https://chat-app-phi-ruddy-92.vercel.app/"
                className="disabled-link"
              >
                🔗 Live
              </a>
              <a
                href="https://github.com/ahamedajaj01/chatApp"
                className="disabled-link"
              >
                💻 Code
              </a>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* ========================== CONTACT SECTION ============================= */}
        <section className="contact-section" id="contact">
          <h2>Contact Me</h2>
          <p className="contact-intro">
            Have a project in mind or just want to say hi? Let’s connect!
          </p>

          <div className="contact-container">
            <form
              ref={contactForm}
              onSubmit={sendEmail}
              className="contact-form"
              id="contact-form"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>

            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                <strong>Email:</strong> ahamed.ajaj01@gmail.com
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/in/ajaj-ahamed-323369364"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/ahamedajaj01"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Repo
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ========================== FOOTER ============================= */}
      <footer className="footer-container">
        <p>
          <a
            href="https://github.com/ahamedajaj01"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/ajaj-ahamed-323369364"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            LinkedIn
          </a>{" "}
          |
          <a
            href="mailto:ahamed.ajaj01@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Email
          </a>
        </p>
        <p>
          <a href="#">Back to top ↑</a>
        </p>
        <p className="copyright">
          &copy; <span id="year"></span> Ajaj Ahamed. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
