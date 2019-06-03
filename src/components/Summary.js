import React from 'react';
import { connect } from 'react-redux';

const Summary = ( props ) => (
  <section className="section summary-section">
      <h2 className="section-title">
        <span className="icon-holder"><i className="fas fa-user"></i></span>
        {props.summary.title}
      </h2>
      <div className="summary">
          <p style={{ textAlign: 'justify' }}>{props.summary.content}</p>
      </div>{/*<!--//summary-->*/}
  </section>
);

const mapStateToProps = (state) => ({
  summary: state.profile.summary
});

export default connect(mapStateToProps, null)(Summary);
