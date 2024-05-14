import React from "react";
import { useState, useEffect } from "react";
import './home.css'
import image from '../components/assets/images/raybilcliff.jpg'
import { TypeAnimation } from 'react-type-animation';
import { Container, Row, Col } from "react-bootstrap";
import Type from "../components/data/Type";
export function Home() {


    return (
        <section>
            <Container fluid className="home-section" id="home">

                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> MUHAMMED HISHAM</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "center" }}>
                                <Type />
                            </div>
                        </Col>


                    </Row>
                </Container>
            </Container>

        </section>
    )


}