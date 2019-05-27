import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions';

const Profile = ( props ) => (
  <div className="profile-container" style={{ backgroundColor: '#000' }}>
      <img className="profile" src="https://themes.3rdwavemedia.com/demo/orbit/assets/images/profile.png" alt="" />
      <h1 className="name" style={{ fontSize: 25 }}>{props.general.name}</h1>
      <h3 className="tagline">{props.general.title}</h3>
      <div style={{
        padding: 4,
        boxShadow: '7px 7px 5px #9E9E9E',
        position: 'absolute',
        top: 0,
        right: 0
        }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"
            alt="select language"
            height="25"
            width="42"
            />
      </div>
  </div>
);

// <button type="button" onClick={() => props.fetchProfile()}>Click Me!</button>

const mapStateToProps = state => ({
  general: state.profile.general
})

export default connect(mapStateToProps, { fetchProfile })(Profile);
