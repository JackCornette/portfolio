import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">James (Jack) Cornette </span>
            from <span className="purple"> Belton, Texas.</span>
            <br />
            I have just completed a Non-Thesis Masters Degree in Computer Science at
            the University of Oklahoma., where I also completed a BS in Computer 
            Engineering with a minor in Computer Science. I am currently searching for a software
            engineering position that may include embedded development. I'm a hardworker and leader
            by 
            
            <br />
            <br />
            Apart from coding/ problem solving, I love
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Weight Lifting, Hiking, Skiing
            </li>
            <li className="about-activity">
              <ImPointRight /> Soccer, MMA, and Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming With Friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
