import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import './about.css'
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{
            textAlign: "justify", color: 'white', fontFamily: "unset", fontSize: '1.5em', lineHeight: '1.5',
            margin: '10px 0'
          }}>
            Hi there, I am <span className="purple">Hisham </span>
            from <span className="purple"> Kerala, India.</span>
            <br /> <br />
            I am a passionate mobile app developer with 3 years of experience, specializing in React Native
            <br />
            Over the years, I’ve built dynamic and user-friendly mobile applications that focus on both performance and design<br />


            <br />
            In addition to React Native, I am proficient in Kotlin and Jetpack Compose
            <br />
            I’m constantly expanding my skills and love exploring new technologies to deliver innovative solutions.
            <br />

            <br />
            <span className="purple"> Apart from coding, some other activities that I love to do!</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight style={{ color: 'white' }} /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: 'white' }} /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: 'white' }} /> Travelling
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
