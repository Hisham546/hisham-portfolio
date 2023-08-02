import React from "react";
import { useState } from "react";
import './styles/home.css'


import image from "./assets/images/abstract-textured-backgound.jpg"

export function Home() {
    //const [color,setColor]=useState('')
    return (


        <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            className="mainContainer">
            <div className="headerContainer">
                <h2 className="topHeadings">Home</h2>
                <h2 className="topHeadings">About me </h2>
                <h2 className="topHeadings">Portfolio</h2>
                <h2 className="topHeadings">Contact </h2>
            </div>
            <h2 className="mobileApp"> Mobile App Developer </h2>
            <div className="myNameDiv">
                <h2 className="helloText">Hello,i'm  </h2>
                <h2 className="myName"> Muhammed Hisham </h2>
            </div>
            
        </div>

    )


}