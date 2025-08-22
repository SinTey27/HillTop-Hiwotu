import React from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import ContactUs from "./Pages/ContactUs/ContactUs";
import WhoWeAre from "../src/Pages/AboutUs/WhoWeAre/WhoWeAre";
import Team from "./Pages/AboutUs/Team/Team";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageGallery from "./Pages/AboutUs/ImageGallery/ImageGallery";
import RecentlyCompleted from "./Pages/Projects/RecentlyCompleted";
import Testimonials from "./Pages/Testimonials/Testimonials";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/ImageGallery" element={<ImageGallery />} />
        <Route path="/RecentlyCompleted" element={<RecentlyCompleted />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
