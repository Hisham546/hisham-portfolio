import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
//import { Link } from "react-router-dom";
import './Navbar.css'
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import About from "../../presentation/about/about";
import { Link } from "react-scroll";
function NavBar() {
  const [menu, setMenu] = useState("home")
  const links = [
    {
      name: "Home",
      route: "home",  
    },
    {
      name: "About me",
      route: "about",
    },
    {
      name: "Projects",
      route: "projects", 
    },
    {
      name: "Contact",
      route: "contact", 
    },
  ];







  return (
    <div
      className='navbar'>

      <ul
        className='navbar-menu'

      >
        {/* <li className="topHeadings"><Link className="link" to="/"
          style={{ fontFamily: "unset", fontSize: '1.4em', }}>Home</Link></li>

        <li className="topHeadings"><Link className="link" to="/about"
          style={{ fontFamily: "unset", fontSize: '1.4em', }}>About me</Link></li>
        <li className="topHeadings"><Link className="link" to="/project"
          style={{ fontFamily: "unset", fontSize: '1.4em', }}>Project</Link></li>
        <li className="topHeadings"><Link className="link" to="/about"
          style={{ fontFamily: "unset", fontSize: '1.4em', }}>Contact</Link></li> */}



        {links.map((el) => (
          <li className="cursor-pointer">
            <Link
              to={el.route}
              activeClass={"text-white bg-blue-500"}
              spy={true}
              smooth={true}
              className="topHeadings"
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>



    </div>
  )
}


export default NavBar;

//  className="topHeadings"