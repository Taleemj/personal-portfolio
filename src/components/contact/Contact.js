import React, { useRef } from "react";
import "./contact.css";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import AnimatedLetters from "../Animated/AnimatedLetters";
import emailjs from "@emailjs/browser";
import "animate.css";

const Contact = () => {
  const heading = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];

  const nameref = useRef();
  const subjectref = useRef();
  const emailref = useRef();
  const messageref = useRef();
  const formref = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qk3pncs",
        "template_wzifqhf",
        formref.current,
        "UMCV1YwfNUNEnBTqj"
      )
      .then(
        (message) => console.log(message),
        alert("thank you, your message has been sent succefully")
      )
      .then(
        (nameref.current.value = ""),
        (emailref.current.value = ""),
        (messageref.current.value = ""),
        (subjectref.current.value = "")
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="info">
        <h2>
          <AnimatedLetters
            letterClass="text-animate"
            wordArray={heading}
            idx={12}
          />
        </h2>
        <p className="animate__animated animate__slideInLeft animate__delay-2s">
          I am interested and available for freelance, part time or full time
          work feel free to leave me a message about any opportunities or just
          say hii.
        </p>
        <div className="contact">
          <div className="email">
            <img src={email} alt="" />
            taleemmankuer@gmail.com
          </div>
          <div className="phone">
            <img src={phone} alt="" />
            +211923919670
          </div>
        </div>
        <form ref={formref} autoComplete="off" onSubmit={sendMessage}>
          <ul>
            <li>
              <input
                type="text"
                name="name"
                className="name"
                placeholder="Name"
                ref={nameref}
                required
              />
            </li>
            <li>
              <input
                type="email"
                name="email"
                placeholder="Email"
                ref={emailref}
                required
              />
            </li>
          </ul>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            ref={subjectref}
            required
          />
          <textarea
            placeholder="Message..."
            name="message"
            ref={messageref}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="map">fvdigkofmd</div>
    </div>
  );
};

export default Contact;
