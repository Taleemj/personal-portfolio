import React, { useState } from "react";
import "./header.css";
import menu from "../../assets/menu.png";
import times from "../../assets/times.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="logo">
        {/* <img src={logo} alt="TM" /> */}
        TM
      </div>
      {menuOpen ? (
        <div className="nav2">
          <ul onClick={() => setMenuOpen(false)}>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="nav">
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
      <div className="menu">
        <img
          src={menuOpen ? times : menu}
          onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
