import React from "react";
import "./WhoWeAre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const WhoWeAre = () => {
  const values = [
    "Integrity: We uphold the highest ethical standards in all our work.",
    "Excellence: We are committed to quality, professionalism, and continuous improvement.",
    "Partnership: We work collaboratively with our clients and stakeholders.",
    "Innovation: We use creative and context-sensitive approaches to deliver practical solutions.",
    "Empowerment: We aim to empower communities and clients alike through capacity building and knowledge transfer.",
  ];

  const lists = [
    "Proven Track Record: Successfully conducted more than 15 research, evaluation, and capacity assessment projects withlocal and international NGOs.",
    "Contextual Understanding: Deep knowledge of Ethiopia's socio-economic, cultural, and geographic landscapes.",
    "Client-Centric Approach: Every assignment is tailored to meet the specific needs and goals of our clients.",
    "Multidisciplinary Team: Our consultants possess diverse expertise in M&E, public health, child protection,  livelihoods, education, gender, and governance.",
    "Ethical and Inclusive Research: Special emphasis on safeguarding, gender sensitivity, and participatory methodologies.",
  ];
  return (
    <div className="who-we-are">
      <div className="content">
        <h1 className="header">Who We Are</h1>
        <p className="head-p">HIWOTU / 2019 / Hilltop</p>
        <p className="paragraph">
          Hilltop Consultants is a growing and dynamic consulting firm
          headquartered in Addis Ababa, Ethiopia. Established in 2019, we are
          committed to delivering high-quality, evidence-based consulting
          services that contribute to sustainable social and economic
          development. Our mission is to be a trusted partner to development
          actors by offering tailored project support, research, and evaluation
          services that empower communities, inform policies, and drive
          meaningful change. We bring together local knowledge, technical
          expertise, and a results-driven mindset to support our clients in
          achieving their development goals.
        </p>
        <h2 className="header">Vision, Mission, and Core Values</h2>
        <h3 className="header-sec">Vision:</h3>
        <p className="paragraph">
          To be a leading consulting firm in Africa known for innovation,
          integrity, and impact in the social and economic development sectors.
        </p>
        <h3 className="header-sec">Mission:</h3>
        <p className="paragraph">
          To provide timely, relevant, and actionable consulting services that
          support clients in designing, implementing, and evaluating high-impact
          development interventions.
        </p>
        <h3 className="header-sec">Core Values:</h3>
        <ul>
          {values.map((value, index) => (
            <li key={index}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{
                  marginRight: "15px",
                  color: "#0eafeeff",
                  fontSize: "15px",
                }}
              />
              {value}
            </li>
          ))}
        </ul>
        <h2 className="header">What Sets Us Apart</h2>
        <p className="para">
          Hilltop Consultants stands out for its personalized approach,
          commitment to quality, and strong local networks. Our unique strengths
          include:
        </p>
        <ul className="last">
          {lists.map((list, index) => (
            <li key={index}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ marginRight: "15px", color: "#0eafeeff" }}
              />
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhoWeAre;
