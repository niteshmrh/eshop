import React, { useState } from "react";
import "./Contact.css";

function Contact(props) {
  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(userData);
    event.preventDefault();
  };
  return (
    <div className="contact-bg">
      <div className="content">
        <div className="contact-header">
          <div className="line1">GOT A QUESTION?</div>

          <div className="line2">Contact E-MART</div>

          <div className="line3">
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={(event) => handleChange(event)}
          />

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={(event) => handleChange(event)}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(event) => handleChange(event)}
          />

          <label>Message</label>
          <textarea
            name="message"
            onChange={(event) => handleChange(event)}
          ></textarea>

          <center>
            <button type="submit">Send Mesage</button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Contact;
