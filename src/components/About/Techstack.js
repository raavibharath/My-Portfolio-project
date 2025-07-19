import { Row, Col } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
} from "react-icons/di";

import {
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiMicrosoftazure,
  SiPowerbi,
  SiDatabricks,
  SiApachespark,
  SiAmazonaws,
  SiScikitlearn,
  SiNextdotjs,
  SiOpenai,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Data Engineering Skills */}
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftsqlserver /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftazure /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDatabricks /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachespark /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPowerbi /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>

      {/* API / Data Access */}
      <Col xs={4} md={2} className="tech-icons"><TbApi /></Col>

      {/* AI & ML Tools */}
      <Col xs={4} md={2} className="tech-icons"><SiOpenai /></Col> {/* OpenAI / GPT-4 */}
      <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPandas /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNumpy /></Col>

      {/* AI Concepts as Labels */}
      <Col xs={4} md={2} className="tech-icons">🧠 Ollama (Local LLMs)</Col>
      <Col xs={4} md={2} className="tech-icons">📚 RAG with LangChain</Col>
      <Col xs={4} md={2} className="tech-icons">🧠 Context Window / Prompt Design</Col>
      <Col xs={4} md={2} className="tech-icons">    LLM Tokenization</Col>

      {/* Web & Scripting Tools */}
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
    </Row>
  );
}

export default Techstack;
