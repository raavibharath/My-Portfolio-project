import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiDatabase, DiGit, DiJava, DiJavascript1, DiNodejs, DiReact } from "react-icons/di";
import { SiMicrosoftazure, SiPowerbi, SiPostgresql, SiDatabricks, SiApachespark, SiMicrosoftsqlserver, SiNextdotjs, SiTableau, SiSnowflake, SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiApacheairflow, SiApachenifi, SiApacheflink, SiKubernetes, SiDocker } from "react-icons/si"; // DevOps and Big Data tools
import { SiTensorflow, SiKeras, SiScikitlearn, SiPytorch } from "react-icons/si"; // AI/ML tools

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Professional Skillset Section */}
      <Col xs={12} className="tech-section">
        <h2 className="tech-section-title">Professional <strong className="purple">Skillset</strong></h2>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {/* Core Skills */}
          <Col xs={4} md={2} className="tech-icons">
            <DiPython />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftsqlserver />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftazure />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPowerbi />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiDatabricks />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiApachespark />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <TbApi />
          </Col>
        </Row>
      </Col>

      {/* Tools & Frameworks Section */}
      <Col xs={12} className="tech-section">
        <h2 className="tech-section-title">Tools & Frameworks</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {/* Apache Tools */}
          <Col xs={4} md={2} className="tech-icons">
            <SiApacheairflow /> {/* Apache Airflow */}
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiApacheflink /> {/* Apache Flink */}
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiApachenifi /> {/* Apache NiFi */}
          </Col>

          {/* Data Engineering Tools */}
          <Col xs={4} md={2} className="tech-icons">
            <SiMongodb /> {/* MongoDB */}
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiSnowflake /> {/* Snowflake */}
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiTableau /> {/* Tableau */}
          </Col>

          {/* AI/ML Libraries */}
          <Col xs={4} md={2} className="tech-icons">
            <SiTensorflow /> {/* TensorFlow */}
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiKeras /> {/* Keras */}
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiScikitlearn /> {/* Scikit-learn */}
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPytorch /> {/* PyTorch */}
          </Col>

          {/* DevOps & Cloud */}
          <Col xs={4} md={2} className="tech-icons">
            <SiDocker /> {/* Docker */}
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiKubernetes /> {/* Kubernetes */}
          </Col>

          {/* Frameworks & Additional Technologies */}
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNextdotjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJava />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Techstack;
