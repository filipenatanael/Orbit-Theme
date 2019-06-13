import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions';

const Profile = ( props ) => (
  <div className="profile-container" style={{ backgroundColor: '#000' }}>
      <img className="profile" src={props.general.photo} alt="Profile" />
      <h1 className="name" style={{ fontSize: 25 }}>{props.general.name}</h1>
      <h3 className="tagline">{props.general.title}</h3>
  </div>
);
/* <div style={{
    // padding: 4,
    // boxShadow: '7px 7px 5px #9E9E9E',
    position: 'absolute',
    marginRight: -50,
    top: 0,
    right: 0
    }}>
      <img
        src={props.config.flag}
        alt={props.config.alternate}
        height="25"
        width="42"
        />
  </div> */
  
// onClick={() => props.fetchProfile('french')}

const mapStateToProps = state => ({
  config: state.app.config,
  general: state.profile.general,
  profile: state.profile
})

export default connect(mapStateToProps, { fetchProfile })(Profile);
