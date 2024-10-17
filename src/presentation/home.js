import React from "react";
import { useState, useEffect } from "react";
import './home.css'

import { TypeAnimation } from 'react-type-animation';
import { Container, Row, Col } from "react-bootstrap";
import Type from "../components/data/Type";
import Particle from "../components/data/Particle";
import cloud from "../components/assets/images/cloudBg.png";
import { motion } from "framer-motion";
export function Home() {


    return (
        <section>
            <Container
                style={{ backgroundImage: `url('${cloud}')` }}
                fluid className="home-section" id="home">
                {/* <Particle/> */}

                <Container className="home-content">
                    <Row>

                        <h1
                            // className="heading"
                            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                        >
                            <motion.span
                                className={" heading"}
                            >
                                Hi There!{" "}
                                <span className="wave" role="img"
                                    aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </motion.span>
                        </h1>

                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            I am
                            <strong className="main-name"> MUHAMMED HISHAM</strong>
                        </h1>

                        <div style={{ padding: 50, textAlign: "center"  }}>
                          
                                <Type />
                           
                        </div>



                    </Row>
                </Container>
            </Container>

        </section>
    )


}