import React from "react";
import "./Team.css"; // Don't forget to create this CSS file

const teamMembers = [
  {
    name: "Dr. Helen Tesfaye",
    title: "Lead Strategy Consultant",
    photo: "../../../assets/person 1.jfif",
  },
  {
    name: "Samuel Kebede",
    title: "Senior Business Analyst",
    photo: "path/to/jane_photo.jpg",
  },
  {
    name: "Marta Lemma",
    title: "Training & Capacity Lead",
    photo: "path/to/alice_photo.jpg",
  },
  {
    name: "Daniel Getachew",
    title: "Policy & Research Advisor",
    photo: "path/to/bob_photo.jpg",
  },
  {
    name: "Hiwotu Kassaw",
    title: "CEO and Director",
    photo: "path/to/charlie_photo.jpg",
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
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <div className="member-info">
              <span className="member-name">{member.name}</span>
              <span className="member-title">{member.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
