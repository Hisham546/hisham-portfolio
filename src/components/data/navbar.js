import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import './Navbar.css'
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import About from "../../presentation/about/about";

function NavBar() {
  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>

      <ul className='navbar-menu'>
        <li className="topHeadings"><Link className="link" to="/"
          style={{ fontFamily: "unset", fontSize: '1.4em', }}>Home</Link></li>
        <li className="topHeadings"><Link className="link" to="/about"
          style={{ fontFamily: "unset", fontSize: '1.4em', }}>About me</Link></li>
        <li className="topHeadings"><Link className="link" to="/"
          style={{ fontFamily: "unset", fontSize: '1.4em', }}>Project</Link></li>
        <li className="topHeadings"><Link className="link" to="/about"
          style={{ fontFamily: "unset", fontSize: '1.4em', }}>Contact</Link></li>
      </ul>



    </div>
  )
}


export default NavBar;

