import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Pages/AboutUs/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Pages/Projects/Projects";
import ContactUS from "./Pages/ContactUs/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<ContactUS />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
