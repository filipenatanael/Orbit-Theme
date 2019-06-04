import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const Interests = ( props ) => (
  <div className="interests-container container-block">
      <h2 className="container-block-title">{props.interests.title}</h2>
      <ul className="list-unstyled interests-list">
          {
            _.map(props.interests.content, c => {
              return (
                <li>{c.interest}</li>
              )
            })
          }
      </ul>
  </div>
);

const mapStateToProps = (state) => ({
  interests: state.profile.interests
});

export default connect(mapStateToProps)(Interests);
