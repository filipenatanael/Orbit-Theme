import React, { Component } from 'react';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Education from './components/Education';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Summary from './components/Summary';
import Experiences from './components/Experiences';
import Projects from './components/Projects';

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
         {/*<!--sidebar-wrapper-->*/}
         </div>

         <div className="main-wrapper">
         {/*<!--section-section-->*/}
         <Summary />

           {/*<!--experiences-section-->*/}
           <Experiences />

           {/*<!--projects-section-->*/}
           <Projects />

             <section className="skills-section section">
                 <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                 <div className="skillset">
                     <div className="item">
                         <h3 className="level-title">Python &amp; Django</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">Javascript &amp; jQuery</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">Angular</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">HTML5 &amp; CSS</h3>
                         <div className="progress level-bar">
                   <div className="progress-bar theme-progress-bar" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">Ruby on Rails</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">Sketch &amp; Photoshop</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                 </div>
             </section>{/*<!--//skills-section-->*/}

         </div>{/*<!--//main-body-->*/}
      </div>
   );
  }
}

export default App;
