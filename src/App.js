import React, { Component } from 'react';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Education from './components/Education';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Summary from './components/Summary';
import Experiences from './components/Experiences';

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

             <section className="section projects-section">
                 <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                 <div className="intro">
                     <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                 </div>{/*<!--//intro-->*/}
                 <div className="item">
                     <span className="project-title"><a href="#hook">Velocity</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>

                 </div>{/*<!--//item-->*/}
                 <div className="item">
                     <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> -
                     <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                 </div>{/*<!--//item-->*/}
                 <div className="item">
                     <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/" target="_blank">Tempo</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>
                 </div>{/*<!--//item-->*/}
                 <div className="item">
                     <span className="project-title"><a href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/" target="_blank">Atom</a></span> - <span className="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps. </span>
                 </div>{/*<!--//item-->*/}
                 <div className="item">
                     <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">Delta</a></span> - <span className="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>
                 </div>{/*<!--//item-->*/}
             </section>{/*<!--//section-->*/}

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
