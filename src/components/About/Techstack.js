import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiDatabase,
  DiGit,
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiMicrosoftazure,
  SiPowerbi,
  SiPostgresql,
  SiDatabricks,
  SiApachespark,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiAmazonaws,
} from "react-icons/si";
import { TbApi, TbBrain } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdTune } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Skills */}
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQL Server">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Azure">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Power BI">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Databricks">
        <SiDatabricks />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Apache Spark">
        <SiApachespark />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="REST APIs">
        <TbApi />
      </Col>

      {/* Frameworks & Libraries */}
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>

      {/* Bonus: AI/ML, AWS, RAG, Ollama, Fine-Tuning */}
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="RAG (Retrieval-Augmented Generation)">
        <TbBrain />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Fine-Tuning">
        <MdTune />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AI / ML">
        <GiArtificialIntelligence />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ollama / OpenAI Models">
        <FaRobot />
      </Col>
    </Row>
  );
}

export default Techstack;
