
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import './about.css'
import { techStack } from "../../constant";
import { motion } from "framer-motion";
import { ImPointRight } from "react-icons/im";
function About() {
  return (

    <div className="about-section" id="about">

      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">

        <div>
          <motion.div>
            <h1 style={{ fontSize: "3.1em", color: '#3a86eb' }}>
              Little about me
            </h1>
            <AboutCard />
          </motion.div>

          <h1 className="project-heading">
            <strong className="skillHeading">   Technologies and tools I use </strong>
          </h1>
          <motion.div

            className="flex flex-wrap mt-8 flex flex-wrap justify-between ">

            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="icon-size" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <span className="skillHeading"> Apart from coding, some other activities that I love to do!</span>
        <ul>
            <li className="about-activity">
              <ImPointRight style={{ color: 'black' }} /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: 'black' }} /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: 'black' }} /> Travelling
            </li>
          </ul>

      </div>
    </div>


  )




}

export default About;