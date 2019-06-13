import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import DOMPurify from 'dompurify';

const Experiences = ( props ) => (
  <section className="section experiences-section">
      <h2 className="section-title"><span className="icon-holder">
        <i className="fas fa-briefcase"></i></span>{props.experiences.title}</h2>
      {
        _.map(props.experiences.jobs, j => {

          return (
            <div key={j.title} className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">{j.title}</h3>
                        <div className="time">{j.time}</div>
                    </div>
                    <div className="company">{j.company}</div>
                </div>
                <div
                  className="details"
                  style={{ textAlign: 'justify' }}
                  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(j.details)}}>
                </div>
            </div>
          );
        })
      }
  </section>
);

const mapStateToProps = (state) => ({
  experiences: state.profile.experiences
});

export default connect(mapStateToProps)(Experiences);
