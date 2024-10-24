import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import './about.css'
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <motion.div>
        <p

          className="paragraph"

        >
          {/* <span className="purple">Greetings!</span> */}

          <br /> 
          I'm <span className="purple">Hisham, </span>
          A passionate mobile app developer with 3 years of experience in developing mobile apps,
          I’m primarily focused on React Native. However,I also have knowledge in native Android development using Kotlin and Jetpack Compose.
          I have worked on multiple mobile apps, including eCommerce, ERP and educational applications.
          Additionally,I have hands-on experience in deploying and maintaining Android and iOS apps in the Play Store and the App Store,
          ensuring they meet quality standards and user expectations.<br /><br />

          Over the years,I’ve built dynamic and user-friendly mobile applications that emphasize both performance and design.
          I’m constantly expanding my skills and love exploring new technologies to deliver innovative solutions.


          <br />

          <br />

        </p>

      </motion.div>

    </Card>
  );
}

export default AboutCard;
