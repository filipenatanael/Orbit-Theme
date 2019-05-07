import React from 'react';

const Skills = ({ props }) => (
  <section className="skills-section section">
      <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
      <div className="skillset">
          <div className="item">
              <h3 className="level-title">Python &amp; Django</h3>
              <div className="progress level-bar">
      <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
          </div>{/*<!--//item-->*/}

          <div className="item">
              <h3 className="level-title">Javascript &amp; jQuery</h3>
              <div className="progress level-bar">
      <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
          </div>{/*<!--//item-->*/}

          <div className="item">
              <h3 className="level-title">Angular</h3>
              <div className="progress level-bar">
      <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
          </div>{/*<!--//item-->*/}

          <div className="item">
              <h3 className="level-title">HTML5 &amp; CSS</h3>
              <div className="progress level-bar">
        <div className="progress-bar theme-progress-bar" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
          </div>{/*<!--//item-->*/}

          <div className="item">
              <h3 className="level-title">Ruby on Rails</h3>
              <div className="progress level-bar">
      <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
          </div>{/*<!--//item-->*/}

          <div className="item">
              <h3 className="level-title">Sketch &amp; Photoshop</h3>
              <div className="progress level-bar">
      <div className="progress-bar theme-progress-bar" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
          </div>{/*<!--//item-->*/}

      </div>
  </section>
);

export default Skills;
