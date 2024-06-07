// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <TbBrandGolang />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSolidity />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRedis />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//     </Row>
//   );
// }

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import { DiGit, DiPython, DiJava } from 'react-icons/di';
import { TbBrandGolang } from 'react-icons/tb';
import {SiLinux, SiTensorflow, SiRaspberrypi, SiVisualstudiocode, SiSlack, SiMacos, SiDiscord} from 'react-icons/si';
import { FaRobot, FaMicrochip, FaProjectDiagram } from 'react-icons/fa';
import { RiRadarLine, RiTeamLine } from 'react-icons/ri';
import matlab from "../../Assets/matlab.png";
import cuda from "../../Assets/cuda.png";
import sql from "../../Assets/sql.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgC />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={cuda}
          className="img-fluid"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={matlab}
          className="img-fluid"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ fontSize: '60px', fontWeight: 'bold', paddingTop: '15px'}}>ROS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
          src={sql}
          className="img-fluid"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrochip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiRadarLine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiTeamLine />
      </Col>
    </Row>
  );
}

export default Techstack;
