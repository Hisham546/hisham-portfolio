import React from "react";
import { useState } from "react";
import './styles/home.css'
import image from "./assets/images/abstract-textured-backgound.jpg"
import { TypeAnimation } from 'react-type-animation';
export function Home() {

    return (


        <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            className="mainContainer">
            <div className="headerContainer">
                <h2 className="topHeadings">Home</h2>
                <h2 className="topHeadings">About me </h2>
                <h2 className="topHeadings">Portfolio</h2>
                <h2 className="topHeadings">Contact </h2>
            </div>
    
            <div className="myNameDiv">
               
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Hello",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "I'm Muhammed Hisham ",
        1000,
        'Application Developer',
        1000,
        'I create UI rich apps ',
        1000
      ]}
      wrapper="span"
      speed={45}
      cursor={false}

      omitDeletionAnimation={false}
      style={{ fontSize: '3em', display: 'inline-block',color:'white',fontFamily:"monospace" }}
      repeat={Infinity}
    />
            </div>


        </div>

    )


}