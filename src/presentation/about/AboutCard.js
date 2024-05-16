import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import './about.css'
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",color:'white',fontFamily:"revert-layer",fontSize: '1.2em' }}>
            Hi there, I am <span className="purple">Hisham </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            an Application Developer
            <br />
            I come from a non-IT background but made a career switch to IT.<br />
            I've had a curiosity for technology since my teenage years, always dive into tech-related topics
           
            <br />
            my particular interest lies in Application development. Following that, I started my career as a App developer.
            <br/>
            After gaining some experience, I also began working on iOS app development using React Native.
            <br/>
            I have hands-on experience in developing and publishing Android and iOS apps on both the Play Store and the App Store, as well as maintaining them.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight style={{color:'white'}} /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight style={{color:'white'}} /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight  style={{color:'white'}}/> Travelling
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
