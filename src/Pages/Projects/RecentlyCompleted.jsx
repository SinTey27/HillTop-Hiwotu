import React from "react";
import "./RecentlyCompleted.css";
import Rcomp1 from "../../assets/Rcomp1.jpg";
import Rcomp2 from "../../assets/Rcomp2.jpg";
import Rcomp3 from "../../assets/Rcomp3.jpg";
import Rcomp4 from "../../assets/Rcomp4.jpg";
import Rcomp5 from "../../assets/Rcomp5.jpg";
import Rcomp6 from "../../assets/Rcomp6.jpg";
import Rcomp7 from "../../assets/Rcomp7.jpg";
import Rcomp8 from "../../assets/Rcomp8.jpg";

const RecentlyCompleted = () => {
  const projects = [
    {
      title: "Project Sintayehu",
      description: "A comprehensive market analysis for a tech startup.",
      image: Rcomp1,
    },
    {
      title: "Project Hiwetu",
      description: "Strategic planning for an NGO focused on education.",
      image: Rcomp2,
    },
    {
      title: "Project Abebe",
      description: "Financial consulting for a real estate development.",
      image: Rcomp3,
    },
    {
      title: "Project Rediet",
      description: "A comprehensive market analysis for a tech startup.",
      image: Rcomp4,
    },
    {
      title: "Project Tewodros",
      description: "Strategic planning for an NGO focused on education.",
      image: Rcomp5,
    },
    {
      title: "Project Tihtina",
      description: "Financial consulting for a real estate development.",
      image: Rcomp6,
    },
    {
      title: "Project Ephrem",
      description: "A comprehensive market analysis for a tech startup.",
      image: Rcomp7,
    },
    {
      title: "Project Darik",
      description: "Strategic planning for an NGO focused on education.",
      image: Rcomp8,
    },
    {
      title: "Project Henok",
      description: "Financial consulting for a real estate development.",
      image: Rcomp1,
    },
  ];

  return (
    <div className="recently-completed">
      <h2>Recently Completed Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyCompleted;
