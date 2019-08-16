import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import Contact from './Contact';
import Education from './Education';
import Languages from './Languages';
import Interests from './Interests';
import Summary from './Summary';
import Experiences from './Experiences';
import Projects from './Projects';
import Skills from './Skills';
import { ToastContainer } from 'react-toastify';

import { fetchProfile } from '../actions';

class Main extends Component {
  state = {
    language: 'enghish'
  }
  componentWillMount() {
    this.props.fetchProfile(this.state.language)
  }
  setDocumentTitle(name) {
    document.title = name;
  }
  render() {
    const { active, name } = this.props.general;

    if (active === 1) {
        this.setDocumentTitle(name);

        return (
          <div className="wrapper">
            <ToastContainer autoClose={2000} />
             <div className="sidebar-wrapper">
                {/*<!--profile-container-->*/}
                <Profile />
                {/*<!--contact-container-->*/}
                <Contact />
                {/*<!--education-container-->*/}
                <Education />
                {/*<!--languages-container-->*/}
                <Languages />
                {/*<!--interests-container-->*/}
                <Interests />
             </div>

             <div className="main-wrapper">
               {/*<!--section-section-->*/}
               <Summary />
               {/*<!--experiences-section-->*/}
               <Experiences />
               {/*<!--projects-section-->*/}
               <Projects />
               {/*<!--skills-section-->*/}
               <Skills />
             </div>
          </div>
        );

    }
    return (
      <h1
        align='center'
        style={{ marginTop: 50 }}>
        Loading...
        </h1>
    )
  }
}

const mapStateToProps = (state) => ({
  general: state.profile.general
});

export default connect(mapStateToProps, { fetchProfile })(Main);
