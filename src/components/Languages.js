import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const Languages = ( props ) => (
  <div className="languages-container container-block">
      <h2 className="container-block-title">Languages</h2>
      <ul className="list-unstyled interests-list">
          {
            _.map(props.languages.content, c => {
              return (
                <li key={c.level}>{c.language} <span className="lang-desc">({c.level})</span></li>
              )
            })
          }
      </ul>
  </div>
);

const mapStateToProps = (state) => ({
  languages: state.profile.languages
});

export default connect(mapStateToProps)(Languages);
