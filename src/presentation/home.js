import React from "react";
import './home.css'
import { Container, Row, Col } from "react-bootstrap";
import cloud from "../components/assets/images/cloudBg.png";
import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";
import activity from 'react-useanimations/lib/activity';
export function Home() {


    return (
        <section>
            <Container
                style={{ backgroundImage: `url('${cloud}')` }}
                fluid className="home-section" id="home">


                <Container className="home-content">
                    <Row>
                        <div className="flex justify-center sm:justify-start">
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900 text-center sm:text-left">
                                <motion.span className={"heading"}>
                                    Hi There!{" "}
                                    <span className="wave" role="img" aria-labelledby="wave">
                                        👋🏻
                                    </span>
                                </motion.span>
                            </h1>
                        </div>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight text-center">

                            I am
                            <strong className="main-name ml-2"> MUHAMMED HISHAM</strong>
                        </h1>

                        <div style={{ padding: 50, textAlign: "center" }}>

                            <p

                                className="shortDescription"  >
                                <br />

                                A Homo-Sapien who loves to code
                                {/* <UseAnimations animation={activity} size={36} /> */}

                                <br />

                                <br />

                            </p>

                        </div>



                    </Row>
                </Container>
            </Container>

        </section>
    )


}