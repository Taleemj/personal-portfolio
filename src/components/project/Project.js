import React from "react";
import "./project.css";

const Project = ({ title, description, codeLink, demoLink, tag, img}) => {
  return (
    <div className="singleproject">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h5>{description}</h5>
      <h4>stack</h4>
      <div className="stack">
        {tag.map((t, i) => (
          <p key={i}>{`#${t}`}</p>
        ))}
      </div>
      <div className='link-btns'>
      <a href={demoLink} target='_blank' rel="noreferrer" ><button href={demoLink}>Preview</button></a>
      <a href={codeLink} target='_blank' rel="noreferrer" ><button href={codeLink}>Code</button></a>
      </div>
    </div>
  );
};

export default Project;
