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
              <Link>
                About
                <FaChevronDown className={dropdownAboutOpen ? "rotate" : ""} />
              </Link>
              {dropdownAboutOpen && (
                <div className="dropdown-item">
                  <Link
                    to="/WhoWeAre"
                    smooth={true}
                    offset={-260}
                    duration={500}
                  >
                    Who We Are
                  </Link>
                  <Link to="/Team" smooth={true} offset={-260} duration={500}>
                    Team
                  </Link>
                  <Link
                    to="/ImageGallery"
                    smooth={true}
                    offset={-260}
                    duration={500}
                  >
                    Image Gallery
                  </Link>
                </div>
              )}
            </div>
            <div
              className="dropdown"
              onMouseEnter={handleMouseEnterProjects}
              onMouseLeave={handleMouseLeaveProjects}
            >
              <Link>
                Projects
                <FaChevronDown
                  className={dropdownProjectsOpen ? "rotate" : ""}
                />
              </Link>
              {dropdownProjectsOpen && (
                <div className="dropdown-item">
                  <Link
                    to="/RecentlyCompleted"
                    smooth={true}
                    offset={-260}
                    duration={500}
                  >
                    Recently Completed
                  </Link>
                  <Link
                    to="/Testimonials"
                    smooth={true}
                    offset={-260}
                    duration={500}
                  >
                    Testimonials
                  </Link>
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
