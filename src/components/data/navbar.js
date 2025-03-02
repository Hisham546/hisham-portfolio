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
import UseAnimations from "react-useanimations";
import activity from 'react-useanimations/lib/activity';

import Hamburger from "hamburger-react";
function NavBar() {
  const [menu, setMenu] = useState("home")
  const [toggle, setToggle] = useState(false);
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
      <div className="decorIcon">
      </div>
      {/* Hamburger Menu Button (Visible only on mobile) */}
      <div className="md:hidden flex items-center hamburger-menu">
        <Hamburger toggled={toggle} toggle={setToggle} size={22} color="#000000" />
      </div>
      {/* Navbar Links (Visible in Desktop and toggles in Mobile) */}
      <ul className={`navbar-menu ${toggle ? "active" : "hidden"} md:flex`}>

        {links.map((el) => (
          <li className="cursor-pointer">
            <Link
              to={el.route}
              activeClass={"text-white bg-blue-500"}
              spy={true}
              smooth={true}
              className="topHeadings text-base sm:text-lg md:text-xl lg:text-2xl"
              onClick={() => setToggle(false)} // Closes menu when clicking a link
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
