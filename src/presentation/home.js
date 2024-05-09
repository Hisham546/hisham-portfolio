import React from "react";
import { useState, useEffect } from "react";
import './styles/home.css'
import image from '../components/assets/images/raybilcliff.jpg'
import { TypeAnimation } from 'react-type-animation';

export function Home() {

    // const [scrolled, setScrolled] = useState(false);
    // const handleScroll = () => {
    //     console.log('hello')
    //     const scrollY = window.scrollY;
    //     // Update the state based on your preferred scroll position threshold
    //     setScrolled(scrollY > 500); // Set '200' to the position where you want the content change to occur
    //     console.log(scrolled)
    // };
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [])
    return (


        <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            className="mainContainer">
            {/* <div className="headerContainer">
                <h2 className="topHeadings">Home</h2>
                <h2 className="topHeadings">About me </h2>
                <h2 className="topHeadings" >Portfolio</h2>
                <h2 className="topHeadings">Contact </h2>
            </div> */}

            <div className="myNameDiv">

                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Hello",
                        1000,
                        "I'm Muhammed Hisham ",
                        1000,
                        'Application Developer',
                        1000,

                    ]}
                    wrapper="span"
                    speed={45}
                    cursor={false}
                    deletionSpeed={{ type: "keyStrokeDelayInMs", value: 60 }}
                    omitDeletionAnimation={false}
                    style={{ fontSize: '3em', display: 'inline-block', color: 'white', fontFamily: "monospace" }}
                    repeat={Infinity}
                />
            </div>



        </div>

    )


}