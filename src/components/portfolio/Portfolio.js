import React, { useState } from "react";
import Project from "../project/Project";
import { htmlprojects, reactprojects } from "../../projects";
import "./portfolio.css";
import AnimatedLetters from "../Animated/AnimatedLetters";

const Portfolio = () => {
  const [htmlcss, setHtmlcss] = useState(false);
  const heading = ["M", "y", " ", "p", "r", "o", "j", "e", "c", "t", "s"];

  return (
    <div className="portfolio-container" id="portfolio">
      <h1>
        <AnimatedLetters
          wordArray={heading}
          letterClass="text-animate"
          idx={5}
        />
      </h1>
      <div className="p-buttons">
        <button
          style={{
            backgroundColor: htmlcss ? "transparent" : "#000",
            color: htmlcss ? "#000" : "#fff",
          }}
          onClick={() => setHtmlcss(false)}
        >
          React/Apis
        </button>
        <button
          style={{
            backgroundColor: htmlcss ? "#000" : "transparent",
            color: htmlcss ? "#fff" : "#000",
          }}
          onClick={() => setHtmlcss(true)}
        >
          Html/Css
        </button>
      </div>
      {htmlcss ? (
        <div className="portfolio">
          {htmlprojects.map((pro) => (
            <Project
              key={pro.id}
              title={pro.title}
              description={pro.description}
              tag={pro.tag}
              codeLink={pro.codeLink}
              demoLink={pro.demoLink}
              img={pro.img}
            />
          ))}
        </div>
      ) : (
        <div className="portfolio">
          {reactprojects.map((pro) => (
            <Project
              key={pro.id}
              title={pro.title}
              description={pro.description}
              tag={pro.tag}
              codeLink={pro.codeLink}
              demoLink={pro.demoLink}
              img={pro.img}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
