
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import './about.css'
function About() {
 return(

    <Container fluid className="about-section">
    {/* <Particle /> */}
    <Container>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "5px",
            paddingBottom: "30px",
        
          }}
        >
          <h1 style={{ fontSize: "3.1em",color:' #cd5ff8' }}>
          Little about me 
          </h1>
          <AboutCard/>
        </Col>
        <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img"
        >
          {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
        </Col>
      </Row>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
{/* 
      <Techstack /> */}

      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      {/* <Toolstack /> */}

      {/* <Github /> */}
    </Container>
  </Container>


 )




}

export default About;