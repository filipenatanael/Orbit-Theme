import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const Skills = ( props ) => (
  <section>
    { props.skills.content.length > 0 ? (
      <section className="skills-section section">
          <h2 className="section-title">
            <span className="icon-holder"><i className="fas fa-rocket"></i></span>
            {props.skills.title}
          </h2>

          {
            _.map(props.skills.content, c => {
              return (
                <div key={c.title} className="skillset">
                    <div className="item">
                      <h3 className="level-title">{c.title}</h3>
                      <div className="progress level-bar">
                        <div className="progress-bar theme-progress-bar"
                             role="progressbar"
                             aria-valuenow={c.progress}
                             style={{ width: `${c.progress}%` }}
                             aria-valuemin="0"
                             aria-valuemax="100">
                        </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
      </section>
    ) : null
  }
  </section>
);

const mapStateToProps = (state) => ({
  skills: state.profile.skills
});

export default connect(mapStateToProps)(Skills);
