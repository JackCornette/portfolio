import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home.gif"; // Ensure this path is correct
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const homeGIF = "https://drive.google.com/file/d/1nA0LB6dV9UCA368DwFCHolQkxrWJIvG7/preview"
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
            <iframe src={homeGIF} allow="autoplay" className="img-fluid large-gif" style={{ width: '100%', height: '372px' }}></iframe>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
