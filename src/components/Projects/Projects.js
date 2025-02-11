import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Data_Architecture.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Generative-AI-for-Automated-ETL"
              description="This project provides a Flask web application that uses a pre-trained GPT-2 model to generate ETL (Extract, Transform, Load) code based on user descriptions."
              ghLink="https://github.com/raavibharath/Generative-AI-for-Automated-ETL-Code-Generation"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ad-Impression-and-Clicks-with-Apache"
              description="Implementation of simulated advertisement impressions and clicks using Apache Spark's Structured Streaming API. The project aims to showcase how to process and analyze real-time streaming data to identify meaningful user interactions, particularly focusing on impressions and clicks that occur within a relevant time window."
              ghLink="https://github.com/raavibharath/Simulated-Ad-Impression-and-Clicks-with-Apache-Spark-Structured-Streaming"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Data Analysis"
              description="IPL Dataset Analysis Using Apache Spark Overview This project performs data analysis on the Indian Premier League (IPL) dataset using Apache Spark. It explores player statistics, team performance, and match details while leveraging Spark's powerful distributed data processing capabilities."
              ghLink="https://github.com/raavibharath/IPL_data_analysis_using_Databricks"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ETL Pipeline for Music Database"
              description="This project is an end-to-end ETL pipeline designed to extract, transform, and load music-related data from Spotify's API into a structured database. The primary goal is to apply data engineering principles in a real-world scenario, reinforcing my understanding of data processing, analytics, and storage. By leveraging Microsoft Azure services, this project also serves as a stepping stone toward achieving the Azure Data Engineering Associate certification."
              ghLink="https://github.com/raavibharath/Spotify_ETL_pipeline_using_Azure"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI For Social Good"
              description="Using 'Natural Language Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in suicide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and TensorFlow backend. The classifier successfully predicted various types of emotions of humans. The highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and pass it to the classifier to predict the person's emotion."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
