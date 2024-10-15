import React from "react";
import Card from "react-bootstrap/Card";

import './about.css'
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="paragraph"
          
          style={{
            textAlign: "justify", fontFamily:"initial", fontSize: '1.5em', lineHeight: '1.5',
            margin: '10px 0'
          }}
          
          >
            Hi there, I am <span className="purple">Hisham </span>
            from <span className="purple"> Kerala, India.</span>
            <br /> <br />
            I am a passionate mobile app developer with 3 years of experience, specializing in React Native
            <br />
            Over the years, I’ve built dynamic and user-friendly mobile applications that focus on both performance and design<br />


            <br />
            In addition to React Native, I also have knowledge  Kotlin  Jetpack Compose
            <br />
            I’m constantly expanding my skills and love exploring new technologies to deliver innovative solutions.
            <br />

            <br />
          
          </p>
          

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
