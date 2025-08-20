import React, { useState } from "react";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownAboutOpen, setDropdownAboutOpen] = useState(false);
  const [dropdownProjectsOpen, setDropdownProjectsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMouseEnterAbout = () => setDropdownAboutOpen(true);
  const handleMouseLeaveAbout = () => setDropdownAboutOpen(false);

  const handleMouseEnterProjects = () => setDropdownProjectsOpen(true);
  const handleMouseLeaveProjects = () => setDropdownProjectsOpen(false);

  return (
    <header>
      <div className="header-container">
        <a href="/">
          <img src={logo} alt="Company Logo" id="logo" />
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </div>

        {isMenuOpen && (
          <div className="dropdown-menu" id="navTabs">
            <Link to="/">Home</Link>
            <div
              className="dropdown"
              onMouseEnter={handleMouseEnterAbout}
              onMouseLeave={handleMouseLeaveAbout}
            >
              <Link to="/About">
                About
                <FaChevronDown className={dropdownAboutOpen ? "rotate" : ""} />
              </Link>
              {dropdownAboutOpen && (
                <div className="dropdown-item">
                  <Link to="/WhoWeAre">Who We Are</Link>
                  <Link to="/Team">Team</Link>
                  <Link to="/ImageGallery">Image Gallery</Link>
                </div>
              )}
            </div>
            <div
              className="dropdown"
              onMouseEnter={handleMouseEnterProjects}
              onMouseLeave={handleMouseLeaveProjects}
            >
              <Link to="/Projects">
                Projects
                <FaChevronDown
                  className={dropdownProjectsOpen ? "rotate" : ""}
                />
              </Link>
              {dropdownProjectsOpen && (
                <div className="dropdown-item">
                  <Link to="/RecentlyCompleted">Recently Completed</Link>
                  <Link to="/Testimonials">Testimonials</Link>
                </div>
              )}
            </div>
            <Link to="/Contact">Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
