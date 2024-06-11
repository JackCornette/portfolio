import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Soro.css';
import soro from "../../Assets/Projects/soro.png";
import remi from "../../Assets/soro_page/remi.png"; // Example image path

import captain from "../../Assets/Projects/captain.JPG"; // Example image path
import team from "../../Assets/soro_page/team.JPG";
import pumpkins from "../../Assets/soro_page/pumpkins.jpg";

import training from "../../Assets/soro_page/training.PNG";
import training2 from "../../Assets/soro_page/training2.PNG";
import outreach from "../../Assets/soro_page/outreach.JPG";

import pcb1 from "../../Assets/Projects/canpcb.png"; // Example image path
import pcb2 from "../../Assets/soro_page/PCB.jpg";
import pcb3 from "../../Assets/soro_page/pcb1.png";

// import troubleshooting from"../../Assets/soro_page/capstone.jpg"; // Example image path

import science from "../../Assets/soro_page/science.png";

import capstone from "../../Assets/soro_page/capstone.jpg";
import arm from "../../Assets/soro_page/RemiArm2.jpg";
import armik from "../../Assets/Projects/armIK.gif";

function Soro() {
  return (
    <div className="soro-container">
      <img src={soro} className="img-fluid" alt="soro logo" style={{ marginTop: "100px", maxHeight: "250px" }} />
      <br />
      <br />
      <br />

      <p>
        Welcome to the Sooner Rover Team page! Our team, composed of 55 engineers from mechancial, electrical, software and geology backgrounds, designs and builds a fully operational rover to compete in the University Rover Challenge (URC).
         Each year we embark on a 8 day trip to Hanksville Utah to compete in desert terrain that mimmics the Martian landscape. The URC is the most competitive university rover competition in the world with 100 teams around the world applying each year.
         The Sooner Rover Team is not the wealthiest but placing 18th, 12th and 7th the past 3 years is a testiment to our team's hardwork, practice and smooth control system.
         As the <strong>Captain and Electrical Lead</strong>, I've had the privilege to significantly contribute to the team's success and growth over the past years. Below is the 2024 System Acceptance Review (SAR) that got our team into the finals. It is our highest scoring
         SAR to date (94/100 and 3rd highest out of 100+ teams). I am the first speaker!
      </p>

      <h2><strong>2024 System Acceptance Review for entry to URC Finals</strong></h2>
      <div className="video-container">
        <div className="video-responsive">
          <iframe 
            src="https://www.youtube.com/embed/BwDTulsYFFI?si=neOzcm36FPM4Fweu" 
            title="System Acceptance Review Video 1" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
      
      <h2><strong>My Role and Contributions</strong></h2>

      <h4><strong>Leadership Achievements:</strong></h4>
      <div className="contribution-section">
        <ul className="contribution-text">
          <li><strong>Team Growth:</strong> Successfully grew the team to 55 members, ensuring a healthy and collaborative environment.</li>
          <li><strong>Budget Management:</strong> Increased our annual budget by $3000, reversing a trend of negative budgets over the past three years.</li>
          <li><strong>Team Morale and Events:</strong> Hosted multiple fun events such as Halloween pumpkin carving, game nights, and catered food events to keep the team spirit high.</li>
          <li><strong>Sponsor Relations:</strong> Presented to and communicated with sponsors about our progress, finances, and future goals, securing additional funding and resources for the team.</li>
          <li><strong>Competition Success:</strong> Led the team to the University Rover Challenge finals, achieving the highest System Acceptance Review (SAR) score in our team's history.</li>
        </ul>
        <Row className="image-row">
          <Col className="image-col">
            <img src={team} alt="Team in utah" className="contribution-image" />
          </Col>
          <Col className="image-col">
            <img src={captain} alt="Team after URC finals" className="contribution-image" />
          </Col>
          <Col className="image-col">
            <img src={pumpkins} alt="Pumpkin Carving Event" className="contribution-image" />
          </Col>
        </Row>
      </div>

      <h2><strong>Technical Contributions:</strong></h2>
      
      <div className="contribution-section">
        <h5><strong>Training and Documentation:</strong></h5>
        <div className="contribution-content">
          <ul>
            <li><strong>Training Sessions:</strong> Developed and conducted training sessions for new members, teaching them essential skills in electronics, PCB design, and troubleshooting.</li>
            <li><strong>Comprehensive Documentation:</strong> Created extensive documentation including code documentation, PCB documentation, electronics diagrams, and more to ensure continuity and knowledge transfer.</li>
            <li><strong>Outreach:</strong> I've inspired the youth to someday do what I did on the rover team through events with local FRC middleschool/highschool teams.</li>
          </ul>
        <Row className="image-row">
          <Col className="image-col">
            <img src={training} alt="Electrical Training 1" className="contribution-image" />
          </Col>
          <Col className="image-col">
            <img src={outreach} alt="FRC outreach event" className="contribution-image" />
          </Col>
          <Col className="image-col">
            <img src={training2} alt="Electrical Training 2" className="contribution-image" />
          </Col>
        </Row>
        </div>
      </div>

      <div className="contribution-section">
        <h5><strong>Electrical Systems and Repairs:</strong></h5>
        <div className="contribution-content">
          <ul>
            <li><strong>Rover Repairs:</strong> Conducted dozens of hours of electrical repairs, utilizing skills such as soldering, crimping, and other electrical techniques.</li>
            <li><strong>Troubleshooting:</strong> Performed extensive troubleshooting using tools like multimeters and oscilloscopes for signal debugging and system optimization.</li>
          </ul>
          {/* <img src={troubleshooting} alt="Troubleshooting" className="contribution-image"/> */}
        </div>
      </div>

      <div className="contribution-section">
        <h5><strong>PCB and Hardware Design:</strong></h5>
        <div className="contribution-content">
          <ul>
            <li><strong>PCB Design:</strong> Designed multiple PCBs for various purposes, including LiPo voltage monitoring, CAN-Bus communications, and microcontroller/sensor mounts.</li>
            <li><strong>Microcontroller Programming:</strong> Wrote and optimized code for microcontrollers including Teensy, Raspberry Pi, ESP32, Arduino, and MBED in C/C++.</li>
            <li><strong>System Control:</strong> Fully designed controllers for the rover's wheels, arm, and science package, ensuring seamless operation and integration.</li>
          </ul>
          <Row className="image-row">
          <Col className="image-col">
            <img src={pcb1} alt="pcb 1" className="contribution-image" />
          </Col>
          <Col className="image-col">
            <img src={pcb2} alt="pcb 2" className="contribution-image" />
          </Col>
          <Col className="image-col">
            <img src={pcb3} alt="pcb 3" className="contribution-image" />
          </Col>
        </Row>
        </div>
      </div>

      <div className="contribution-section">
        <h5><strong>Communication Systems:</strong></h5>
        <ul>
          <li><strong>CAN-Bus System:</strong> Implemented the rover's CAN-Bus system to efficiently send messages across the rover, including sensor data and motor control signals. This CAN-Bus has been working
          for 2 years now and is slowly increasing in use. I designed the hardware/PCB and software on Teensy 4.1 microcontrollers.</li>
          <li><strong>UDP WiFi Communications:</strong> Designed the UDP WiFi communication system for rover control and data transmission to mission control. Implemented algorithms that reduce
          rover response delay. </li>
        </ul>
      </div>

      <div className="contribution-section">
        <h5><strong>Mission Control Interface:</strong></h5>
        <ul>
          <li><strong>User Interface:</strong> Developed a user interface for mission control to visualize rover inputs and sensor data including GPS, bearing, temperature, humidity, and methane levels.</li>
          <li><strong>Real-Time Data Graphing:</strong> Implemented a live graph to plot sensor data over time, aiding in real-time monitoring and decision-making.</li>
        </ul>
        <Col>
            <img src={science} alt="science UI" className="contribution-image" />
          </Col>
      </div>

      <div className="contribution-section">
        <br></br>
        <h5><strong>Capstone Project - Robot Arm:</strong></h5>
        <ul>
          <li><strong>Inverse Kinematics:</strong> Developed inverse kinematics for the robot arm, ensuring precise and accurate movement.</li>
          <li><strong>CAN-Bus and PID Algorithms:</strong> Designed CAN-Bus communication and PID control algorithms for smooth and efficient operation.</li>
          <li><strong>Comprehensive Design:</strong> Undertook the complete design process, including PCB design and software development, for the robot arm, which was my capstone project.</li>
        </ul>
        <Row className="image-row">
          <Col className="image-col">
            <img src={arm} alt="Capstooooooone" className="contribution-image" />
          </Col>
          <Col className="image-col">
            <img src={armik} alt="Capstooooooone" className="contribution-image" />
          </Col>
          <Col className="image-col">
            <img src={capstone} alt="Capstooooooone" className="contribution-image" />
          </Col>
        </Row>
      </div>

      <img src={remi} alt="Remi" style={{marginTop:"20px", width:"50%", borderRadius: "5px"}}/>

      <h2><strong>Conclusion</strong></h2>
      <p>
        The Sooner Rover Team has been an integral part of my academic journey. Through relentless effort and dedication, I have contributed to the team's technical advancements and overall success. The skills and experiences gained have not only shaped my career but have also set a strong foundation for the team's future endeavors.
      </p>
      <p>
        If you would like to learn more or have any questions, feel free to reach out via the contact form on my website. Thank you for visiting the Sooner Rover Team page!
      </p>
    </div>
  );
}

export default Soro;


