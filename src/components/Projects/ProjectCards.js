import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import '../../App.css'; // Ensure you import your CSS file

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
          <Card.Title>{props.title}</Card.Title>
          <span className={`label ${props.label}`}>{props.label}</span>
        </div>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="button-container">
          
          {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" style={{marginTop: "10px" }}>
            <BsGithub /> &nbsp;
            {props.isPhoto ? "Photo" : "GitHub"}
          </Button>
          )}
          {"\n"}
          {"\n"}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
          {"\n"}
          {"\n"}

          {props.extraLink && (
            <Button
              variant="primary"
              href={props.extraLink}
              target="_blank"
              style={{ marginLeft: "10px", marginTop: "10px"}}
            >
              {"Poster"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;



