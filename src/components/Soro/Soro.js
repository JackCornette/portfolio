import React from 'react';
import './Soro.css';
import soro from "../../Assets/Projects/soro.png"

function Soro() {
  return (
    <div className="soro-container">
      <img src={soro} className="img-fluid" alt="soro logo" style={{ marginTop: "50px", maxHeight: "250px" }}/>
      <br />
      <br />
      <br />

      <p>
        Welcome to the Sooner Rover team page. Here you'll find information about my involvement with the team, including videos, documentation, and pictures.
      </p>
      
      <h2>My Involvement</h2>
      <p>
        As a member of the Sooner Rover team, I have been involved in various aspects of the project, including design, development, and testing. My contributions have had a significant impact on the team's progress and success.
      </p>
      <ul>
        <li>Designed and implemented the rover's navigation system using advanced algorithms and sensor integration.</li>
        <li>Developed software modules for autonomous operations, enhancing the rover's ability to navigate complex terrains.</li>
        <li>Led a team of engineers to optimize the rover's hardware for better performance and reliability.</li>
        <li>Conducted extensive testing and troubleshooting to ensure the rover's systems were fully operational for competition.</li>
      </ul>
      
      <h2>System Acceptance Review Videos</h2>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
          title="System Acceptance Review Video 1" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
          title="System Acceptance Review Video 2" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>

      <h2>Documentation</h2>
      <div className="documentation">
        <a href="path/to/document1.pdf" target="_blank" rel="noopener noreferrer">Download Documentation 1</a>
        <a href="path/to/document2.pdf" target="_blank" rel="noopener noreferrer">Download Documentation 2</a>
      </div>
      
      <h2>Gallery</h2>
      <div className="gallery">
        <img src="path/to/image1.jpg" alt="Description of image 1" />
        <img src="path/to/image2.jpg" alt="Description of image 2" />
        <img src="path/to/image3.jpg" alt="Description of image 3" />
      </div>
    </div>
  );
}

export default Soro;

