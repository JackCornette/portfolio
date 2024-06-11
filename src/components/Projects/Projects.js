import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import crover from "../../Assets/Projects/crover.jpg";
import jetbot from "../../Assets/Projects/jetbot.gif";
// import captain from "../../Assets/Projects/captain.JPG";
import canpcb from "../../Assets/Projects/canpcb.png";
import wiitar from "../../Assets/Projects/wiitar.jpg";
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
              description="This project is still in progress. I've purchased a wheel system, 2D Li-Dar, IMU, LiPo battery, RGB Camera, and Raspberry pi 5. I plan to make it autonomously navigate my house, combined with computer vision and chatgpt to allow it to speak to people it sees. I also plan to give it cellular data to do long-range (+1 mile) manual driving. If things go well, I plan to upgrade compute to a Jetson Orin"
              ghLink="https://github.com/JackCornette/c-rover"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              label="personal"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={captain}
              isBlog={false}
              title="Sooner Rover Captain Achievements"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              label="rover"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jetbot}
              isBlog={false}
              title="Jetbot Self-Driving"
              description="In OU CS5013 Artificial Intelligence, a partner and I were givena  jetbot robot, comprised of a jetson nano, 2 wheels and an RGB camera. We were told to train some publicly available CNN to teach the jetbot to self drive. As an additional facet to the project, my team trained and tested 5 different python pytorch models (resnet, squeezenet, mobilenet, alexnet, googlenet) to empirically determine the best model."
              ghLink="https://github.com/JackCornette/AI_jetbot"
              demoLink="https://drive.google.com/file/d/1BIyWKXctlbVZmcZDrrJ0gCPBgANcIu0u/view?usp=sharing"
              label="school"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sandbox}
              isBlog={false}
              title="Sandbox Automata"
              description="In OU CS5053 Computer Graphics, this project was semester long with the only guide being to 'develop an interesting graphics project'. My team chose java LWJGL as the engine since we learned Java OpenGL in class. The result is a sandbox drawing/physics/simulaation environment. 2 Cellular Automata algorithms can be simulated, images are outlined using openCV edge detection for drawing, and sand/water pixels can be simualted."
              ghLink="https://github.com/JackCornette/SandboxAutomata"
              demoLink="https://drive.google.com/file/d/1LGPuPAoetrvtHmQnxvMUZhiDebtl-fvU/view?usp=drive_link"
              extraLink="https://drive.google.com/file/d/1PCewCslbNrPVNawx408BcASq65amJ2ZO/view?usp=drive_link"
              label="school"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={science}
              isBlog={false}
              title="SoRo Science Package"
              description="The 2024 SoRo Science Package consisted of a temperature, humidity and methane sensor, 3 servos, 2 actuators, a drill, 3 cameras and a GPS. I designed and wired the electrical and software system, which included the CAN-Bus & UDP send/receive, motor control, and more. I designed the UI to include the Rovers GPS/bearing and the current sensor readings. I also implemented a live graph that would plot the last 20s of sensor data. This package scored 75/100 in the URC science mission."
              ghLink="https://github.com/Sooner-Rover-Team/Drive"
              label="rover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wiitar}
              isBlog={false}
              title="Rover Wii-Guitar Controller"
              description="I made this project for fun because I found a software called WiitarThing that lets you bluetooth conenct a Wii-mote to a computer. I simply read the bluetooth msg and figured out the code for each button, then wrote a python script that converts it to rover control data. In operation, the faster the user strums, the faster the rover moves, and actions like forward/turn/pivot/reverse are all multi-button commands to mimmic music chords. It really looks like someones playing Guitar Hero while trying to drive it."
              ghLink="https://github.com/JackCornette/rover-guitar/tree/main"
              demoLink="https://drive.google.com/file/d/1mpAD5a6ySgwo3Oujrw7OEN_iQe8CpLAK/view?usp=drive_link"
              label="personal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turtlebot}
              isBlog={false}
              title="TurtleBot Tour Guide"
              description="In OU CS5023 Intro to Intelligent Robotics, given a Turtlebot ROS robot, we were told to make a Tour-Guide that could be used on campus. Using python ROS and the 2D LiDar and RGB camera, wheel encoders and IMU, I mapped the building and used aruco markers as 'talking points' in the tour. The robot would autonomously navigate to an area and search for the correct aruco marker to speak about in a tour. The C-Rover is basically a much cooler version of this :)"
              ghLink="https://github.com/JackCornette/ou_robotics_class/tree/main/proj1ws/src/project_2"
              demoLink="https://drive.google.com/file/d/1xzKT5AU5OWyEDn9mjb3WiN2_zktraLve/view?usp=drive_link"
              extraLink="https://drive.google.com/file/d/18YiI421Gi84F4TuVmeg_k_9ymFHh5WSN/view?usp=drive_link"
              label="school"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canpcb}
              isBlog={false}
              title="CAN-Bus PCB & Microcontroller software"
              description="Probably my largest contribution to SoRo is my CAN-Bus design. This bus enables the team to have a structured method of communication between different nodes on the rover such as the Arm, Science, Wheels and main EBox. I developed flexible and reusable PCB with Teensy 4.1 & CAN Tranceivers that my team could use on any sub-system. I also designed the CAN software and message structure the team uses. This CAN-Bus greatly improved message delays/errors, has been in use for 2 years/2 URC competitions, and currently is used for sensor and control communications between the rover and mission control."
              ghLink="https://github.com/Sooner-Rover-Team/Microcontrollers/PCB"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="rover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={armIK}
              isBlog={false}
              title="Robot Arm Inverse-Kinematics"
              description="The SoRo Arm was my capstone project along side 4 Mechanical Engineers. I developed the Arm UI that visualizes an Inverse Kinematics algorithm I wrote to manipulate the arm with one joystick. The physical and 2D model arm are in sync, so as an operator moves the end-effector claw in the UI, the physical arm mimmics the position. I also selected motors and electronics and wired everything together. Two Teensy 4.1 read encoder data and communicate over CAN/UDP to mission control, while also computing IK and PID controll algorithms. These algorithms allowed us to type full words on a keyboard with the arm while in mission control half a km away."
              ghLink="https://github.com/Sooner-Rover-Team/Drive/blob/main/util.py"
              demoLink="https://youtu.be/BwDTulsYFFI?si=mtY5rsTLCCof5qns"
              extraLink="https://drive.google.com/file/d/1S3ogfJAVzW3zVlUdVO7R5J-Mx_BhVt87/view?usp=drive_link"
              label="rover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pid}
              isBlog={false}
              title="Multiple PID Control Implementations"
              description="I have developed test and improved multiple PID algorithms on the rover that allow it to operate more smoothley. I have written my own PID algorithms for the wheel speed control, arm position stabilization, and on other moving rover parts on various science package's. I have also tested and improved autonomous GPS navigation PID algorithms through refinement of the P/I/D coeeficients. I'm knowledgeable in the 3 components of PID and their use-cases and am familiar with the idea that half the work is finding the right coefficients."
              ghLink="https://github.com/Sooner-Rover-Team/Microcontrollers/tree/main/Teensy%204.1/teensyEBOX/TeensyEbox"
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
              ghLink="https://github.com/JackCornette/portableTempSensor/tree/main"
              demoLink="https://drive.google.com/file/d/1V4sko4Nhq-nR_XmlY4enX5oA7GAtkrGK/view?usp=drive_link" 
              label="personal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adsb}
              isBlog={false}
              title="ADS-B Real-Time Plane Tracker"
              description="Radar Engineers @ the ARRC tested Radars on OU planes and needed a way to track them in real time. Online plane trackers have large delay. Using a Hack-RF One Software Defined Radio and GNU Radio, I was able to intercept and decode plane data. I then created a UI to display the plane information such as GPS, Bearing, Altitude, Callsign, and Speed. The UI also had a Google Map display that would show the planes on the map. This tool helped Radar Engineers know when a plane is about to fly into view much quicker than online sources. I completed this project as a Sophomore and taught myself Python and multithreading for this project. I am unfortunately unable to share the code."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="arrc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuda}
              isBlog={false}
              title="CUDA Signal Processing Speed-up"
              description="As Undergraduate Research Assistant @ the ARRC @ OU, I assisted a PhD student in a project involving Range-Doppler Maps for object detection/tracking. To make the pipeline run in real time, the signal processing needed to be parallelized on a GPU. We experimented with ArrayFire and ultimately implemented Fast-Fourier Transforms in CUDA. This implementation allowed the PhD student to finally present his work infront of sponsors. I am unfortunately unable to share the code. I have also completed a PDN Programming course @ OU that dived into CUDA, so I consider myself fairly knowledgable about CUDA/parallel programming."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              label="arrc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elab}
              isBlog={false}
              title="1st place No-Software Robot Challenge"
              description="In Electronics Lab @ OU, we were tasked to design a line follower robot that, after following the line, needs to turn around and hit the door either via projectile or driving to it. This robot had to be made entirely of hardware componnents. My robot used 555 timers, Infrared sensors, Switches/Latches, regulators, a PWM generator, and more. My robot was one of the fastets to follow the line and, due to a nerf gun powered by a servo, I was able to shoot the door, scoring me 1st place out of 60 with the fastest time to completion."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://youtube.com/shorts/Li4QUEQT_Mc?si=w469Obk4a3adHOES"      
              label="school"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
