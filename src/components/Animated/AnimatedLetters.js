import React from "react";
import "./animatedletters.css";
import "animate.css";

const AnimatedLetters = ({ letterClass, wordArray, idx }) => {
  return (
    <span>
      {wordArray.map((char, i) => (
        <span
          key={char + i}
          className={`animate__animated animate__bounceIn ${letterClass} _${
            i + idx
          }`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
