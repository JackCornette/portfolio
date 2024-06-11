import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home.gif"; // Ensure this path is correct
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ProjectCard from "./../Projects/ProjectCards";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import armIK from "../../Assets/Projects/armIK.gif";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JACK CORNETTE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={7} style={{ paddingBottom: "10%" }}>
              <img src={homeLogo} className="img-fluid large-gif" alt="home gif" />
            </Col>
          </Row>
          <Row className="spotlight-section">
            <Col md={12}>
              <h2 className="main-name" style={{textAlign: "center", padding: 0, marginTop: "2%", fontSize: 50}}><strong>Project Spotlight</strong></h2>
            </Col>
            <Col md={10} className="project-card">
            <ProjectCard style={{width: "90%"}}
              imgPath={armIK}
              isBlog={false}
              title="Robot Arm Inverse-Kinematics"
              description="The SoRo Arm was my capstone project along side 4 Mechanical Engineers. I developed the Arm UI that visualizes an Inverse Kinematics algorithm I wrote to manipulate the arm with one joystick. The physical and 2D model arm are in sync, so as an operator moves the end-effector claw in the UI, the physical arm mimics the position. I also selected motors and electronics and wired everything together. Two Teensy 4.1s read encoder data and communicate over CAN/UDP to mission control, while also computing IK and PID control algorithms. These algorithms allowed the Sooner Rover team to type full words on a keyboard with the arm while in mission control half a km away."
              ghLink="https://github.com/Sooner-Rover-Team/Drive/blob/main/util.py"
              demoLink="https://youtu.be/BwDTulsYFFI?si=mtY5rsTLCCof5qns"
              extraLink="https://drive.google.com/file/d/1S3ogfJAVzW3zVlUdVO7R5J-Mx_BhVt87/view?usp=drive_link"
              label="rover"
            />
          </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
