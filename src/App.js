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

import ScrollToTop from "./components/data/ScrollToTop";

function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);



  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
