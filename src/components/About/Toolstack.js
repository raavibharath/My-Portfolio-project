import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMicrosoftazure,
  SiPowerbi,
  SiDatabricks,
  SiJupyter,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure /> {/* Azure DevOps, Cloud Tools */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks /> {/* Databricks for Big Data Processing */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi /> {/* Power BI for Visualization */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter /> {/* Jupyter for Python/ML Workflows */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub for Version Control */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* API Testing */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code for Development */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /> {/* Slack for Team Communication */}
      </Col>
    </Row>
  );
}

export default Toolstack;
