import React, { Component } from 'react';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Education from './components/Education';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Summary from './components/Summary';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';

class App extends Component {
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

export default App;
