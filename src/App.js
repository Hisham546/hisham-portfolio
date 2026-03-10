import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { Home } from './presentation/home';
import NavBar from "./components/data/navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import About from "./presentation/about/about";
import { Project } from "./presentation/project/project";
import { Contact } from "./presentation/contact";

function App() {

  return (

    <div  >
      <NavBar />
      <Home />
      <About />
      <Project />
      <Contact/>
    </div>


  );
}

export default App;
