import React  from "react";
import './styles/home.css'
import { hover } from "@testing-library/user-event/dist/hover";
import image from "./assets/images/pexels-otavio-fonseca-4665064.jpg"


export function Home(){

return(


<div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
 className="mainContainer">
    <div className="headerContainer">
    <h2 className="name">Home</h2>
    <h2 className="name">About me </h2>
    <h2 className="name">Portfolio</h2>
    <h2 className="name">Contact </h2>   
    </div>
   
    <h2  className="myName">Hello, i'm Muhammed Hisham </h2> 

</div>

)


}