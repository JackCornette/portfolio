// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

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
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

