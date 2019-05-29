import { FETCH_PROFILE } from '../actions';

const initialState = {
  general: {
    photo: 'https://themes.3rdwavemedia.com/demo/orbit/assets/images/profile.png',
    name: 'Filipe Natanael',
    title: 'Full Stack Developer',
    contact: [
      {
        type: 'email',
        content: 'filipenatanael@live.com',
        url: 'mailto: yourname@email.com',
        alt: 'Main Email',
        target: false
      },
      {
        type: 'phone',
        content: '00 000 0000 000',
        url: 'tel:0123 456 789',
        alt: 'Phone Number',
      },
      {
        type: 'website',
        content: 'portfoliosite.com',
        url: 'www.portifolio.com',
        alt: 'Portofolio',
        target: true
      },
      {
        type: 'linkedin',
        content: '@filipenatanael',
        url: 'linkedin/filipenatanael',
        alt: 'Linkedin',
        target: true
      },
      {
        type: 'github',
        content: 'github.com/filipenatanael',
        url: 'github.com/filipenatanael',
        alt: 'GitHub',
        target: true
      },
      {
        type: 'twitter',
        content: '@filipenatanael',
        url: 'twitter.com/filipenatanael',
        alt: 'Twitter',
        target: true
      }
    ]
  },
  summary: {
    title: 'CAREER PROFILE',
    content: 'I am fascinated for software architecture and design, I have over 7 years of experience working with technology, of these, 5 years was in software development using patterns, newest technologies, and frameworks such as Laravel, React and Vue. I have a strong knowledge building complex SPA applications/services and mobile applications using React-Native. I have familiarity with the progressive web apps concepts as well as I can apply it for building rich web application. I am always trying to learn more and open to new difficult tech challenges.'
  },
  experiences: {
    title: 'Experiences',
    jobs: [
      {
        title: 'Software Engineer',
        time: 'Jan 2015 - Jan 2019',
        company: 'Ânima Educação, Belo Horizonte - Brazil',
        details: '<p> - Design, develop and maintain an internal user interface library and web style guide </br>- Develop code that is modular, scalable, high performance and to high-quality standards </br>- Analyze, optimize performance, improve the code base as well as implement of bug fixes </br>- Plan, implement and release product based on Agile scrum development process </br>- Interact with cross functional teams like DevOps, QA etc to resolve the dependencies of UI and ensure timely delivery of the features </br></br><b>JavaScript, Vue.js, JQuery, Bootstrap, Node.js, Laravel, Oracle, AWS.</b></p>'
      },
      {
        title: 'Full Stack Developer',
        time: 'Jun 2017 - Jan 2018',
        company: 'VanVirtua, Belo Horizonte - Brazil',
        details: '<p>- Develop well structured, readable as well as clean JavaScript that scales and performs </br>- Analyze, optimize performance, and propose changes </br>- Implement creative solutions in a full-stack environment </br>- Participate in Agile development activities including sprint planning. </br></br><b>JavaScript, React Native, PWA, NoSQL, Firebase Platform.</b></p>'
      },
      {
        title: 'UI Developer',
        time: 'Jan 2013 - Dec 2013',
        company: 'Freelancer - Self employed, Belo Horizonte - Brazil',
        details: '<p>- Design and prototyping of ui interfaces </br>- Develop and maintain statics user interfaces </br>- Cuts, adjustments and treatment of images and banners </br></br><b>HTML/XML, CSS, JavasScript, Photoshop, Sketch, Adobe XD.</b></p>'
      }
    ]
  },

  github: {}
}

const START_APP = 'START_APP';

export default function(state = initialState, action) {
  switch (action.type) {
    case START_APP:
        return {
          ...state,
          ...action.payload
        }
    case FETCH_PROFILE:
        return {
          ...state,
          github: action.payload
        }
    default:
      return state;
  }
}
