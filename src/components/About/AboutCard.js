import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, my name is <span className="purple">James (Jack) Cornette </span>
            from <span className="purple"> Belton, Texas.</span>
            <br />
            I have just completed a <span className="purple">Non-Thesis Masters Degree in Computer Science at
            the University of Oklahoma</span>, where I also completed a <span className="purple">BS in Computer 
            Engineering with a minor in Computer Science</span>. I am currently searching for a software
            engineering position that may include embedded development. I'm a hardworker and leader
            by nature; proof is in the <span className="purple">Projects tab!</span> My projects range from personal and school projects, 
            to a deep dive into my designs and leadership on the Sooner Rover Team @ OU.
            
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
