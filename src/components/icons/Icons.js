import React from "react";
import github from "../../assets/github.png";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import "./icons.css";

const Icons = () => {
  return (
    <div className="icon-container">
      <div className="icons">
        <a
          href="https://linkedin.com/in/taleem-mankuer-713367235"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="icon1" alt="linkedin" />
        </a>
        <a
          href="https://mobile.twitter.com/Talerm2"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} className="icon2" alt="twitter" />
        </a>
        <a
          href="https://web.facebook.com/taleem22"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fb} className="icon3" alt="facebook" />
        </a>
        <a href="https://github.com/Taleemj" target="_blank" rel="noreferrer">
          <img src={github} className="icon4" alt="github" />
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Icons;
