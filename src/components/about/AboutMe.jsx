import "./aboutme.css";
import laptop from "../../assets/laptop.png";
import Particles from "react-tsparticles";
import configDark from "../../assets/particlejs-config-dark.json";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import git from "../../assets/git.png";
import react from "../../assets/react.png";
import AnimatedLetters from "../Animated/AnimatedLetters";
import "animate.css";

const AboutMe = () => {
  const heading1Array = ["A", "b", "o", "u", "t", " ", "m", "e"];
  const heading2Array = [
    "T",
    "e",
    "c",
    "h",
    "n",
    "o",
    "l",
    "o",
    "g",
    "i",
    "e",
    "s",
  ];
  return (
    <div className="aboutme" id="about">
      <div className="about-container">
        <div className="about">
          <h1>
            <AnimatedLetters
              letterClass="text-animate"
              idx={15}
              wordArray={heading1Array}
            />
          </h1>
          <p>
            Hi, my name is Taleem Mankuer and i am an aspiring{" "}
            <span style={{ color: "#8931ef" }}>developer</span> and student. I
            enjoy finding creative solutions to problems and spend my time
            experimenting with{" "}
            <span style={{ color: "#8931ef" }}>technologies</span> such as react
            and inhale a wide variety of potentially useful information through
            different platforms.
          </p>
          <br />
          <br />
          <p>
            I enjoy making conections and trying out new things, i love to
            increase my skills and knowledge and would love to advance in my
            career and a developer. I am open for any
            <span style={{ color: "#8931ef" }}> opportunities</span>. I build
            websites that delight and inform and try give it my all.
          </p>
          <br />
          <div className="technologies">
            <h3>
              <AnimatedLetters
                letterClass="text-animate"
                idx={15}
                wordArray={heading2Array}
              />
            </h3>
            <p>
              i have worked and experienced with a wide range of front-end web
              development technologies and here are some of them.
            </p>
            <br />
            <div className="list">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
              </ul>

              <ul>
                <li>Material UI</li>
                <li>React js</li>
                <li>Firebase</li>
                <li>Git/Github</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="laptop">
          <img src={laptop} alt="" />
        </div>

        <div className="cube">
          <div className="cube-spinner">
            <div className="face1">
              <img src={react} alt="" />
            </div>
            <div className="face2">
              <img src={js} alt="" />
            </div>
            <div className="face3">
              <img src={html} alt="" />
            </div>
            <div className="face4">
              <img src={git} alt="" />
            </div>
            <div className="face5">
              <img src={react} alt="" />
            </div>
            <div className="face6">
              <img src={css} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="particles">
        <Particles params={configDark} />
      </div>
    </div>
  );
};

export default AboutMe;
