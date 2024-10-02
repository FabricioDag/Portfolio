import './Project.css';
import figma from './F.png';

const Project = () => {
  return (
    <div className="Project application">
      <h1>Project Title</h1>

      <div className="projectImage"></div>

      <div className="tagsArea">
        <h3>TAGS</h3>
        <div className="tagsWrapper">
          <div className="tag react">React JS</div>
          <div className="tag node">Node JS</div>
          <div className="tag css">CSS</div>
          <div className="tag html">HTML</div>
          <div className="tag git">Git</div>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>

      <div className="linksWrapper">
        <button className="websiteButton">Website</button>
        <button className="githubButton">Github</button>
        <button className="figmaButton">
          <img src={figma} alt="" />
        </button>
      </div>
    </div>
  );
};

export { Project };
