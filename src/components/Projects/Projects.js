import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import crover from "../../Assets/Projects/crover.jpg";
import jetbot from "../../Assets/Projects/jetbot.gif";
import captain from "../../Assets/Projects/captain.JPG";
import canpcb from "../../Assets/Projects/canpcb.png";
import science from "../../Assets/Projects/science.png";
import pid from "../../Assets/Projects/pid.jpg";
import tempsensor from "../../Assets/Projects/tempsensor.PNG";
import cuda from "../../Assets/Projects/cuda.jpg";
import adsb from "../../Assets/Projects/adsb.jpg";
import sandbox from "../../Assets/Projects/sandbox.gif";
import turtlebot from "../../Assets/Projects/turtlebot.gif";
import armIK from "../../Assets/Projects/armIK.gif";
import elab from "../../Assets/Projects/elab.gif";

/*
* Projects:
PERSONAL
- temp sensor 4
- c rover (in progress) 1
SCHOOL
- Jetbot 2
- Turtlebot 2
- Sandbox Automata 2
- E Lab robot 4
- 
ROVER
- CAN-Bus PCB/ Teensy 4.1 upgrade 3
- Manual operate UI Design 3
- Arm Inverse Kinematics 3
- PID control 3
- CAPTAIN: $3000 budget increase, 55 members, highest SAR score, budget,planing,public speaking, networking, etc 2
ARRC
- ADSB Plane Tracker 4
- CUDA/ArrayFire Signal Processing Speedup 4
*/

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", maxWidth: "560px", margin: "0 auto", textAlign: "center", lineHeight: "1.5" }}>
          These projects are sorted new to old. Projects are categorized as 
        <span className="purple"> PERSONAL, SCHOOL, ROVER and ARRC </span> based on what the project was for.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crover}
              isBlog={false}
              title="C-Rover"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              label="personal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={captain}
              isBlog={false}
              title="Sooner Rover Captain Achievements"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              label="rover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jetbot}
              isBlog={false}
              title="Jetbot Self-Driving"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
              label="school"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sandbox}
              isBlog={false}
              title="Sandbox Automata"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
              label="school"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={science}
              isBlog={false}
              title="SoRo Science Package"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="rover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turtlebot}
              isBlog={false}
              title="TurtleBot Tour Guide"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
              label="school"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canpcb}
              isBlog={false}
              title="CAN-Bus PCB & software"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="rover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={armIK}
              isBlog={false}
              title="Robot Arm Inverse-Kinematics"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="rover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pid}
              isBlog={false}
              title="Multiple PID Control Implementations"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="rover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tempsensor}
              isBlog={false}
              title="Portable High-Range Temperature Sensor"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="personal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adsb}
              isBlog={false}
              title="ADS-B Real-Time Plane Tracker"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="arrc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuda}
              isBlog={false}
              title="CUDA Signal Processing Speed-up"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="arrc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elab}
              isBlog={false}
              title="1st place No-Software Robot Challenge"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="school"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
