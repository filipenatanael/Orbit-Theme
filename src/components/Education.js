import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const Education = ( props ) => (
  <div className="education-container container-block">
      <h2 className="container-block-title">{props.education.title}</h2>
      {
        _.map(props.education.content, c => {
          return (
            <div className="item">
                <h4 className="degree">{c.degree}</h4>
                <h5 className="meta">{c.meta}</h5>
                <div className="time">{c.time}</div>
            </div>
          )
        })
      }
  </div>
);

const mapStateToProps = (state) => ({
  education: state.profile.education
});

export default connect(mapStateToProps)(Education);
