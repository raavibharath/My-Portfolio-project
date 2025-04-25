import React from "react";
// import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Experienced Data Analyst with a Master’s in Business Analytics from Saint Peter’s University. Skilled in reporting, data analysis, and transforming complex data into actionable insights.
              <br />
              <br />Proficient in SQL, Azure Data Engineering, Python, and machine learning for data manipulation and analysis. Experienced in building and optimizing data pipelines using Azure Data Lake, Databricks, and Synapse Analytics. Passionate about leveraging data to create innovative solutions, drive business decisions, and support strategic growth.
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
              {/* <li className="social-icons mx-2">
                <a
                  href="https://twitter.com/sandee_deepu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              
              {/* <li className="social-icons mx-2">
                <a
                  href="https://www.instagram.com/sandee_deepu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
