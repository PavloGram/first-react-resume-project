import React, { useState } from "react";
import mailIcon from "../../images/mail-icon.png";
import phoneIcon from "../../images/phone-icon.png";
import locationIcon from "../../images/location-icon.png";
import msgIcon from "../../images/msg-icon.png";
import whiteArrow from "../../images/white-arrow.png";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;




function Contacts() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // ------Enter your web3forms access key below-------

    formData.append("access_key", apiKey);

    const res = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
    //   console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3 className="contact-title">
          Send us a message <img className="contact-img" src={msgIcon} alt="" />
        </h3>
        <p className="contact-text">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li className="contact-item">
            <img className="contact-icon" src={mailIcon} alt="" />
            Contact@GreatStack.dev
          </li>
          <li className="contact-item">
            <img className="contact-icon" src={phoneIcon} alt="" />
            +1 123-456-7890
          </li>
          <li className="contact-item">
            <img className="contact-icon" src={locationIcon} alt="" />
            77 Massachusetts Ave, Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form className="contact-form" onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            className="contact-form-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            className="contact-form-input"
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            className="contact-form-input"
            name="message"
            rows="6"
            placeholder="Enter your text mesaage"
            required
          ></textarea>
          <button type="submit" className="contact-btn">
            Submit now <img className="btn-img" src={whiteArrow} alt="" />
          </button>
        </form>
        <p className="contact-msg-text">{result}</p>
      </div>
    </div>
  );
}

export default Contacts;
