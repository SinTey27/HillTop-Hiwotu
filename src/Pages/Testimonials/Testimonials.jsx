import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ephrem Shumye",
    position: "CEO of Tech Innovations",
    testimonial:
      "Hilltop Consultancy provided exceptional service and insights. Their team helped us navigate complex challenges effortlessly.",
    image: "path/to/image1.jpg",
  },
  {
    name: "Abdela Kedir",
    position: "Founder of Creative Solutions",
    testimonial:
      "The expertise and dedication of Hilltop Consultancy are unmatched. They truly care about their clients' success.",
    image: "path/to/image2.jpg",
  },
  {
    name: "Sisay Seboka",
    position: "Director at Future Enterprises",
    testimonial:
      "Working with Hilltop was a game-changer for our business strategy. They delivered results beyond our expectations.",
    image: "path/to/image3.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <h4 className="testimonial-position">{testimonial.position}</h4>
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
