import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions';

const Profile = ( props ) => (
  <div className="profile-container">
      <img className="profile" src="https://themes.3rdwavemedia.com/demo/orbit/assets/images/profile.png" alt="" />
      <h1 className="name" style={{ fontSize: 25 }}>{props.general.name}</h1>
      <h3 className="tagline">{props.general.title}</h3>
      <button type="button" onClick={() => props.fetchProfile()}>Click Me!</button>
  </div>
);

const mapStateToProps = state => ({
  general: state.profile.general
})

export default connect(mapStateToProps, { fetchProfile })(Profile);
