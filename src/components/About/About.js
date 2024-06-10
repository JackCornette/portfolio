import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.gif";
import newImg from "../../Assets/awardpic.jpg";
import Tilt from "react-parallax-tilt";

function About() {
  const aboutGIF = "https://drive.google.com/file/d/1rB_h-4z08dbJBtAmFvhTn9jkK8_jS1e5/preview" 

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <Container className="large-gif" alt="avatar" style = {{padding: 0}}>
              <img  
                src={laptopImg}
                allow="autoplay" 
                style={{ width: '100%', height: '100%' }} 
                alt="A cool GIF"
                title="A cool GIF">
              </img>
              <img src={newImg} alt="new" className="img-fluid" />
              </Container>
            </Tilt>
          </Col>
        </Row>
        <p style={{fontSize:"30px", color: "rgb(155 126 172)" }}>
          "The only way to do great work is to love what you do."{" "}
        </p>
        <footer className="blockquote-footer" style={{fontSize:"20px", color: "rgb(155 126 172)" }}>Steve Jobs</footer>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        <Github />
      </Container>
    </Container>
  );
}

export default About;
