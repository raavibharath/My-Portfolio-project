import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p>
        Experienced data professional with a Master degree, currently working as a Data Engineer at Johnson & Johnson. Leading critical data platform migration from traditional Hive metastore to Unity Catalog in Databricks, while simultaneously supporting enhancements to existing data pipelines and solutions.

        Proficient in designing and implementing end to end ETL pipelines, integrating data from multiple structured and unstructured sources. Hands-on expertise in Azure Data Engineering tools, including Azure Data Factory, Databricks (PySpark/Scala), and Synapse Analytics.

        Certified Azure Data Engineer Associate and Azure AI Engineer Associate, with strong experience in Power BI, cloud-based data solutions, and AI/ML integration. Passionate about leveraging big data and AI to drive innovation, strategic insights, and business growth in fast-paced, data-driven environments
        </p>
        <footer className="blockquote-footer">Bharath Raavi</footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
