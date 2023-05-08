import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit, DiNodejs } from 'react-icons/di';

function Techstack() {
  return (
    <Row style={{ justifyContent: "left", paddingBottom: "50px", display: "flex", flexWrap: "nowrap" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiRedux />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
    </Row>
  );
}

export default Techstack;
