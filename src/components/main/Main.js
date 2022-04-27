import React, { useState } from "react";
import Header from "../header/Header";
import Icons from "../icons/Icons";
import "./main.css";
import laptop from "../../assets/computer.png";
import CV from "../../assets/Taleem.pdf";
import AnimatedLetters from "../Animated/AnimatedLetters";
import "animate.css";

const Main = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  const nameArry = [
    "a",
    "l",
    "e",
    "e",
    "m",
    " ",
    "M",
    "a",
    "n",
    "k",
    "u",
    "e",
    "r",
  ];
  const jobArray = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "-",
    "e",
    "n",
    "d",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  return (
    <div className="main-container">
      <Header />
      <div className="dark"></div>
      <div className="hero-container">
        <div className="hero">
          <div className="hero-text">
            <h3 className="animate__animated animate__slideInLeft animate__delay-2s">
              <span className="first-span">
                <span className="animate__animated animate__bounceIn">H</span>
                <span className="animate__animated animate__bounceIn">i,</span>
                <br />
                <span className="animate__animated animate__bounceIn">I</span>
                <span className="animate__animated animate__bounceIn">'m</span>
              </span>
              <span style={{ color: "#8931ef", fontSize: "2.5rem" }}>T</span>
              <AnimatedLetters
                letterClass={letterClass}
                wordArray={nameArry}
                idx={3}
              />
            </h3>
            <h1 className="animate__animated animate__slideInRight animate__delay-3s">
              <AnimatedLetters
                letterClass={letterClass}
                wordArray={jobArray}
                idx={4}
              />
            </h1>
            <p className="animate__animated animate__zoomIn animate__delay-4s">
              I creates beautiful and informative websites that help users with
              what they are looking for.
            </p>
            <div className="buttons">
              <a
                className="animate__animated animate__fadeIn animate__delay-5s"
                href={CV}
                target="_blank"
                rel="noreferrer"
              >
                <button>download CV</button>
              </a>
              <a
                className="animate__animated animate__fadeIn animate__delay-5s"
                href="#portfolio"
              >
                <button>portfolio</button>
              </a>
            </div>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-5s  hero-img">
            <img src={laptop} alt="" />
          </div>
        </div>
      </div>
      <Icons />
      <div className="scroll">
        <p className="updown">scroll down</p> <div>&#x2192;</div>
      </div>
    </div>
  );
};

export default Main;
