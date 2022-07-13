import React, { memo } from "react";

import {
  ReactJs,
  Redux,
  Reduxsaga,
  Sass,
  Javascript,
  Html5,
  CssThree,
  Python
} from "@icons-pack/react-simple-icons";

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-content">
        <h3 className="skill-title">frontend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Html5 color="#E34F26" size={50} />
            </div>
            <p className="skill-info">HTML</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <CssThree color="#1572B6" size={50} />
            </div>
            <p className="skill-info">CSS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Javascript color="#F7DF1E" size={50} />
            </div>
            <p className="skill-info">JS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <ReactJs color="#61DAFB" size={50} />
            </div>
            <p className="skill-info">React.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Redux color="#764ABC" size={50} />
            </div>
            <p className="skill-info">Redux</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Reduxsaga color="#999999" size={50} />
            </div>
            <p className="skill-info">Redux-Saga</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Sass color="#CC6699" size={50} />
            </div>
            <p className="skill-info">SASS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Python color="#3766AB" size={50} />
            </div>
            <p className="skill-info">Python</p>
          </div>
        </div>
      </div>
    </section>
  );
};