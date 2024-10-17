import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import './about.css'
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <motion.div>
        <p

          className="mt-20 text-xl text-justify text-gray-500"

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

      </motion.div>

    </Card>
  );
}

export default AboutCard;
