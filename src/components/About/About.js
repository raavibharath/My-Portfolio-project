import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <div>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
            </div>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Certifications Section */}
        <div>
          <h1 className="project-heading">
            <strong className="purple">Certifications</strong>
          </h1>
          <p>Here are the certifications I've earned:</p>
          <ul>
            <li>
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/BharathRaavi-7045/33003CD9BBFCF265?sharingId=8DA5BC4771B50C4F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Azure Data Engineer Associate
              </a>
            </li>
            <li>
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/BharathRaavi-7045/2C205D3AAA985680?sharingId=8DA5BC4771B50C4F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Azure AI Engineer Associate
              </a>
            </li>
            <li>
              <a
                href="https://www.hackerrank.com/certificates/a80eb241077d"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQL Certification
              </a>
            </li>
            <li>
              <a
                href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_M4shGztZbb7n7pSZt_1722821395585_completion_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                PWC Power BI Job simulation Certification
              </a>
            </li>
            <li>
              <a
                href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_M4shGztZbb7n7pSZt_1719095879023_completion_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accenture Data Analytics and Visualization Job Simulation
              </a>
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;
