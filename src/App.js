import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Home from './components/Home/Home';
import "./style.css";
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer';
import NavBar1 from './components/NavBar1';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import "./style.css";
import "./App.css";
import ScrollToTop from './components/ScrollToTop';



function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Router>
      <div className="App" load={load}>
        <NavBar1/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
