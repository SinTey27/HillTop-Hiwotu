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
    setDropdownAboutOpen(false);
    setDropdownProjectsOpen(false);
  };

  const toggleAboutDropdown = () => {
    setDropdownAboutOpen((prev) => !prev);
    setDropdownProjectsOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setDropdownProjectsOpen((prev) => !prev);
    setDropdownAboutOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <a href="/">
          <img src={logo} alt="Company Logo" id="logo" />
        </a>

        <div
          className="menu-icon"
          onClick={toggleMenu}
          role="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✖" : "☰"}
        </div>

        <div
          className={`dropdown-menu ${isMenuOpen ? "show" : ""}`}
          id="navTabs"
        >
          <Link to="/" onClick={toggleMenu} className="nav-link">
            Home
          </Link>
          <div
            className="dropdown"
            onMouseEnter={toggleAboutDropdown}
            onMouseLeave={() => setDropdownAboutOpen(false)}
          >
            <div
              className="nav-link"
              onClick={() => {
                toggleAboutDropdown();
                if (window.innerWidth <= 768) toggleMenu();
              }}
              role="button"
              aria-expanded={dropdownAboutOpen}
              aria-controls="about-dropdown"
            >
              About
              <FaChevronDown className={dropdownAboutOpen ? "rotate" : ""} />
            </div>
            <div
              className={`dropdown-item ${dropdownAboutOpen ? "show" : ""}`}
              id="about-dropdown"
            >
              <Link to="/WhoWeAre" onClick={toggleMenu}>
                Who We Are
              </Link>
              <Link to="/Team" onClick={toggleMenu}>
                Team
              </Link>
              <Link to="/ImageGallery" onClick={toggleMenu}>
                Image Gallery
              </Link>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={toggleProjectsDropdown}
            onMouseLeave={() => setDropdownProjectsOpen(false)}
          >
            <div
              className="nav-link"
              onClick={() => {
                toggleProjectsDropdown();
                if (window.innerWidth <= 768) toggleMenu();
              }}
              role="button"
              aria-expanded={dropdownProjectsOpen}
              aria-controls="projects-dropdown"
            >
              Projects
              <FaChevronDown className={dropdownProjectsOpen ? "rotate" : ""} />
            </div>
            <div
              className={`dropdown-item ${dropdownProjectsOpen ? "show" : ""}`}
              id="projects-dropdown"
            >
              <Link to="/RecentlyCompleted" onClick={toggleMenu}>
                Recently Completed
              </Link>
              <Link to="/Testimonials" onClick={toggleMenu}>
                Testimonials
              </Link>
            </div>
          </div>
          <Link to="/Contact" onClick={toggleMenu} className="nav-link">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
