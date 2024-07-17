import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/GeeksForum.webp";
import emotion from "../../Assets/Projects/MarkovNetSimPro.webp";
import editor from "../../Assets/Projects/CampusTradeHub.webp";
import chatify from "../../Assets/Projects/GradeX.webp";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/AppTrackPro.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="project LifeLine : AI-Driven-Suicide-Prevention"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/Suchinkumar/Lifeline-AI-Driven-Suicide-Prevention"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GradeX"
              description="Developed an automated grading system for student submissions across multiple languages, significantly enhancing efficiency and accuracy. Build with Python, JavaScript & React.js ,this system instantly compiles and grades assignments, eliminating manual unit tests, and increasing grading accuracy by 40%. It also reduces manpower and resource overhead ."
              ghLink="https://github.com/Suchinkumar/GradeX"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AppTrackPro"
              description="A seminar application tracking system enabling users to submit, review, and track seminar applications. Optimized the review process, reducing approval time by 50%. Integrated user feedback for continuous improvements. Built with HTML, CSS, PHP, JavaScript, and MySQL to enhance review efficiency."
              ghLink="https://github.com/Suchinkumar/Seminar-Application-Tracking-Sytem"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CampusTrade Hub"
              description="Created a centralized, secure, and user-friendly online marketplace for the university community using React.js, Node.js,MERN stack & MongoDB. Features include enhanced transaction security, privacy, and streamlined processes for buying, selling, and exchanging goods, significantly saving time and money while improving campus convenience."
              ghLink="https://github.com/abhinavsiingh/UniMarket"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="GeeksForum"
              description="GeeksForum enhances student and professor experiences with secure data handling and verified profiles. Features include Course Communities and Popular Courses recognition for streamlined resource access and real-time communication. Built with  React.js, Node.js & Typescript , it optimizes efficiency and saves valuable time."
              ghLink="https://github.com/Suchinkumar/GeeksForum"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MarkovNetSimPro"
              description="Developed a highly modular and extensible 5G NR and 4G LTE handover performance simulator in Python. Utilized Markov Models for advanced conditional handover analysis and implemented multithreading for parallel execution. 
              The simulator optimizes performance analysis with configurable simulation parameters."
              ghLink="https://github.com/Suchinkumar/MarkovNetSimPro"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
