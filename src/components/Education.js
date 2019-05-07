import React from 'react';

const Education ({ props }) => (
  <div className="education-container container-block">
      <h2 className="container-block-title">Education</h2>
      <div className="item">
          <h4 className="degree">MSc in Computer Science</h4>
          <h5 className="meta">University of London</h5>
          <div className="time">2011 - 2012</div>
      </div>
      <div className="item">
          <h4 className="degree">BSc in Applied Mathematics</h4>
          <h5 className="meta">Bristol University</h5>
          <div className="time">2007 - 2011</div>
      </div>
  </div>
);

export default Education;
