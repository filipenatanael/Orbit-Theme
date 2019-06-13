import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import DOMPurify from 'dompurify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Projects.css';

const options = {
    autoClose: 9000,
    type: toast.TYPE.INFO,
    hideProgressBar: false,
    className: 'black-background',
    position: toast.POSITION.TOP_LEFT,
};

const notify = () => toast.info("Wow so sorry! This was an proprietary internal project and I can not publish any information about the code, but I will be happy to talk about all the technologies and processes involved.", options);

const handleClick = (e, url) => {
  e.preventDefault();
  if (url !== '') {
    let win = window.open(url, '_blank');
    win.focus();
  } else {
    notify()
  }
};

const Projects = ( props ) => (
  <section className="section projects-section">
      <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>{props.projects.title}</h2>
      <div className="intro">
          <p>{props.projects.intro}</p>
      </div>
      {
        _.map(props.projects.works, w => {
          return (
            <div key={w.title} className="item">
                <span className="project-title">
                  <a
                    href={w.url}
                    onClick={(event) => handleClick(event, w.url)}>
                  {w.title}</a></span> - <span className="project-tagline" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(w.tagline)}}>
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
