import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Pages/AboutUs/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Pages/Projects/Projects";
import ContactUs from "./Pages/ContactUs/ContactUs";
import WhoWeAre from "../src/Pages/AboutUs/WhoWeAre/WhoWeAre";
import Team from "./Pages/AboutUs/Team/Team";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
