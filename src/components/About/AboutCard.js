import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suchin Kumar </span>
            from <span className="purple"> Alwar, India.</span>
            {/* <br />
            I am currently 4th year SNIOE Student.
            <br /> */}
            <br />
           I'm diving deep into the world of Cybersec, pursuing my B.Tech. in Computer Science & Engineering at Shiv Nadar Institution of Eminence(SNIOE) , Greater Noida.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building gains
            </li>
            <li className="about-activity">
              <ImPointRight /> playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Succhu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
