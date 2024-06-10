import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home.gif"; // Ensure this path is correct
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ProjectCard from "./../Projects/ProjectCards";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Home() {
  // const homeGIF = "https://drive.google.com/file/d/1nA0LB6dV9UCA368DwFCHolQkxrWJIvG7/preview"
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

            <Col md={7} style={{ paddingBottom: 5 }}>
            <img src={homeLogo} allow="autoplay" title="A cool GIF" className="img-fluid large-gif"></img>
            </Col>
          </Row>
          <Row>
            Project Highlight
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
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
