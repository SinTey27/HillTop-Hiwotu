import React from "react";
import "./ContactUs.css";
import msg_icon from "../../../src/assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9c95b37c-c71e-4f6b-8398-06cbe2b04fcf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form and find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            HiwetuKassaw123@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +251 912105554
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +251 933123433
          </li>
          <li>
            <img src={location_icon} alt="" />
            Hayat 49
            <br />
            Addis Ababa, Ethiopia
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Insert your mobile number"
            required
          />
          <label>Enter Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit" className="sub-btn">
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default ContactUs;
