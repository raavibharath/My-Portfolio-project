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
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPytorch,
  SiApacheairflow,
  SiApacheflink,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Tools */}
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

      {/* Big Data & AI/ML Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow /> {/* Apache Airflow for Workflow Orchestration */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheflink /> {/* Apache Flink for Stream Processing */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /> {/* Docker for Containerization */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes /> {/* Kubernetes for Container Orchestration */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow /> {/* TensorFlow for AI/ML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras /> {/* Keras for AI/ML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn /> {/* Scikit-learn for AI/ML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch /> {/* PyTorch for AI/ML */}
      </Col>
    </Row>
  );
}

export default Toolstack;
