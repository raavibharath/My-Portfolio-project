import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Bharath_Raavi_DataEngineer.pdf";         
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const renderPages = () => {
    let pages = [];
    // Loop to display pages two at a time (vertically stacked)
    for (let i = 1; i <= numPages; i += 2) {
      pages.push(
        <Row key={i} className="d-flex justify-content-center align-items-center">
          {/* First Page */}
          <Col className="d-flex justify-content-center">
            <Page pageNumber={i} scale={width > 786 ? 1.7 : 0.6} />
          </Col>
          
          {/* Second Page, if it exists */}
          {i + 1 <= numPages && (
            <Col className="d-flex justify-content-center">
              <Page pageNumber={i + 1} scale={width > 786 ? 1.7 : 0.6} />
            </Col>
          )}
        </Row>
      );
    }
    return pages;
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            download="Bharath_Raavi.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume d-flex justify-content-center align-items-center">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onLoadSuccess}
          >
            {renderPages()} {/* This will display pages sequentially */}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
