import React from "react";
// import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section d-flex align-items-center justify-content-center"
      id="about"
      style={{ height: "100vh" }}
    >
      {/* <Particle /> */}
      <Container className="text-center">
        <Row>
          <Col md={8} className="home-about-description mx-auto">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />
              <strong>Azure & Databricks Specialist</strong>: Currently working at Johnson & Johnson as a Data Engineer, bringing deep expertise in designing, developing, and optimizing data pipelines on Azure.
              <br />
              <br />
              Adept at delivering scalable data solutions using Databricks (PySpark/Scala), Delta Lake, and Azure Data Factory, with strong cross functional understanding of both engineering and analytical workflows.
              <br />
              <br />
              Proficient in SQL, Python, and Spark, with a proven track record of transforming raw data into reliable, production-ready datasets for analytics, reporting, and machine learning. Experienced in implementing robust data architectures using Azure Data Lake Storage, Synapse Analytics, and ADF, enabling real-time insights and data-driven decision-making.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links d-flex justify-content-center">
              <li className="social-icons mx-2">
                <a
                  href="https://www.linkedin.com/in/br-r/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons mx-2">
                <a
                  href="https://github.com/raavibharath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* Uncomment if needed:
              <li className="social-icons mx-2">
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons mx-2">
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
