import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p>
        Experienced Data Feild with a Master of Science in Business Analytics from Saint Peter’s University. Proficient in designing and implementing pipelines, integrating data from diverse sources, and transforming raw data into actionable insights. Skilled in SQL, Azure Data Engineering, and tools like Azure Data Factory, Databricks, and Synapse Analytics for data processing, ETL workflows, and reporting. Certified Azure AI Engineer Associate and Azure Data Engineer Associate, with expertise in business intelligence, cloud-based solutions, and Power BI. Passionate about leveraging data analytics, machine learning, and AI to drive data-driven decision-making and innovation.
        </p>
        <footer className="blockquote-footer">Bharath Raavi</footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;