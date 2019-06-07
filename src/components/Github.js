import React, { Component } from 'react';

class Github extends Component {
  componentDidMount() {
    window.location.href = 'https://example.com/1234'; 
  }
  render() {
    return (
      <div className="education-container container-block">
        <img className="profile" src="https://cdn-images-1.medium.com/max/1200/1*dDNpLKu_oTLzStsDTnkJ-g.png" alt="Profile" />
      </div>
    );
  }
}

export default Github
