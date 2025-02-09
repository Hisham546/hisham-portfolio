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
      <div className="decorIcon">
      </div>
      <ul
        className='navbar-menu'

      >
        {links.map((el) => (
          <li className="cursor-pointer">
            <Link
              to={el.route}
              activeClass={"text-white bg-blue-500"}
              spy={true}
              smooth={true}
              className="topHeadings text-base sm:text-lg md:text-xl lg:text-2xl"
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
