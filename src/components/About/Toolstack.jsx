import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiNodemon } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiNodemon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGitAlt />
      </Col>
    </Row>
  );
}

export default Toolstack;