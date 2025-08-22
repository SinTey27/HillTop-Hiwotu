import React from "react";
import "./Team.css";
import Hiwetu from "../../../assets/Hiwetu.jpg";
import Samuel from "../../../assets/person 5.jfif";
import Marta from "../../../assets/person 7.jfif";
import Daniel from "../../../assets/person 8.jfif";

const teamMembers = [
  {
    name: "Hiwotu Kassaw",
    title: "CEO and Director",
    photo: Hiwetu,
  },
  {
    name: "Samrawit Kebede",
    title: "Senior Business Analyst",
    photo: Samuel,
  },
  {
    name: "Marta Lemma",
    title: "Training & Capacity Lead",
    photo: Marta,
  },
  {
    name: "Daniel Getachew",
    title: "Policy & Research Advisor",
    photo: Daniel,
  },
];

const Team = () => {
  return (
    <div className="team">
      <h1 className="team-title">Our Team</h1>
      <div className="team-header">
        <h2 className="team-subtitle">Meet Our Team</h2>
        <p className="team-description">
          A diverse and experienced team dedicated to solving complex problems
          and delivering real results.
        </p>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team_img_container" key={index}>
            <img src={member.photo} alt={member.name} className="image1" />
            <div className="overlay_staffs">
              <div className="text_staffs">
                <h3 className="name">{member.name}</h3>
                <p className="title">{member.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
