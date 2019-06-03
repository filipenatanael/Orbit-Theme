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

class Main extends Component {
  componentDidMount() {
    const { name } = this.props.general;
    document.title = name;
  }
  render() {
    return (
      <div className="wrapper">
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
}

const mapStateToProps = (state) => ({
  general: state.profile.general
});

export default connect(mapStateToProps)(Main);
