import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import DOMPurify from 'dompurify';

const Projects = ( props ) => (
  <section className="section projects-section">
      <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>{props.projects.title}</h2>
      <div className="intro">
          <p>{props.projects.intro}</p>
      </div>
      {
        _.map(props.projects.works, w => {
          return (
            <div className="item">
                <span className="project-title">
                  <a href={w.url}>{w.title}</a></span> - <span className="project-tagline" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(w.tagline)}}>
                </span>
            </div>
          )
        })
      }
  </section>
);

const mapStateToProps = (state) => ({
  projects: state.profile.projects
});

export default connect(mapStateToProps)(Projects);
