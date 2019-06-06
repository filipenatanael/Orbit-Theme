import { FETCH_PROFILE } from '../actions';

const initialState = {
  general: {
    photo: 'https://i.ibb.co/BKL9x27/B-100x100.png',
    name: 'Filipe Natanael',
    title: 'JavaScript Developer',
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
        content: 'filipenatanael.github.io',
        url: 'www.portifolio.com',
        alt: 'Portofolio',
        target: true
      },
      {
        type: 'linkedin',
        content: 'linkedin/in/filipenatanael',
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
        content: 'twitter.com/filipenatanael',
        url: 'twitter.com/filipenatanael',
        alt: 'Twitter',
        target: true
      }
    ]
  },
  summary: {
    title: 'CAREER PROFILE',
    content: 'I am fascinated for software architecture and design, I have over 7 years of experience working with technology, of these, 5 years was in software development using patterns, newest technologies, and frameworks such as Laravel, React & React-Native, Vue/Vuex. I have a strong knowledge building complex SPA applications, services and mobile applications using React-Native. I have familiarity with the progressive web apps concepts as well as I can apply it for building rich web application. I am always trying to learn more and open to new difficult tech challenges.'
  },
  experiences: {
    title: 'Experiences',
    jobs: [
      {
        title: 'Software Engineer',
        time: 'Jan 2015 - Jan 2019',
        company: 'Ânima Educação, Belo Horizonte - Brazil',
        details: '<p> - Design, develop and maintain an internal user interface library and web style guide </br>- Develop code that is modular, scalable, high performance and to high-quality standards </br>- Analyze, optimize performance, improve the code base as well as implement of bug fixes </br>- Plan, implement and release product based on Agile scrum development process </br>- Interact with cross functional teams like DevOps, QA etc to resolve the dependencies of UI and ensure timely delivery of the features </br></br><b>JavaScript, Vue.js, Bootstrap, Node.js, Laravel, Git, Oracle, AWS.</b></p>'
      },
      {
        title: 'Full Stack Developer',
        time: 'Jun 2017 - Jan 2018',
        company: 'VanVirtua, Belo Horizonte - Brazil',
        details: '<p>- Develop well structured, readable as well as clean JavaScript that scales and performs </br>- Analyze, optimize performance, and propose changes </br>- Implement creative solutions in a full-stack environment </br>- Participate in Agile development activities including sprint planning. </br></br><b>React Native, JavaScript, PWA, NoSQL, Git, Firebase Platform.</b></p>'
      },
      {
        title: 'UI Developer',
        time: 'Jan 2013 - Dec 2013',
        company: 'Freelancer - Self employed, Belo Horizonte - Brazil',
        details: '<p>- Design and prototyping of ui interfaces </br>- Develop and maintain statics user interfaces </br>- Cuts, adjustments and treatment of images and banners </br></br><b>HTML/XML, CSS, JavasScript, JQuery, Photoshop, Sketch, Adobe XD.</b></p>'
      }
    ]
  },
  projects: {
    title: 'Projects',
    intro: 'You can list your side projects or open source libraries in this section',
    works: [
      {
        title: 'Vestib Admin',
        tagline: 'This project focused on migrating a complex academic management application originally developed in delphi to a modern single page application using the best available techniques, patterns and concepts.',
        url: ''
      },
      {
        title: 'VanVirtua',
        tagline: 'The project aims to provide an optimization method in the management of school transportation, in order to maintain an organized environment for the passenger and the driver/administrator.',
        url: ''
      },
      {
        title: 'Readable Udacity',
        tagline: 'The Readable Project Nanodegree is  a content and comment web app. Users are be able to post content to predefined categories, comment on their posts and other users posts, and vote on posts and comments. Users are also be able to edit and delete posts and comments',
        url: ''
      }
    ]
  },
  education: {
    title: 'Education',
    content: [
      {
        degree: 'Bachelor of Technology (BTech) - System Analysis and Development',
        meta: 'Centro Universitário UNA',
        time: '2015 - 2018'
      },
      {
        degree: 'Nanodegree - React Developer',
        meta: 'Udacity',
        time: '2018 - 2018'
      }
    ]
  },
  languages: {
    title: 'Languages',
    content: [
      {
        language: 'Portuguese',
        level: 'Native'
      },
      {
        language: 'English',
        level: 'Fluent'
      },
      {
        language: 'French',
        level: 'Basic'
      }
    ]
  },
  interests: {
    title: 'Interests',
    content: [
      {
        interest: 'Cooking'
      },
      {
        interest: 'Languages'
      },
      {
        interest: 'Technology'
      }
    ]
  },
  skills: {
    title: 'Skills & Proficiency',
    content: [
      {
        title: 'Python & Django',
        progress: '50'
      },
      {
        title: 'Javascript & jQuery',
        progress: '70'
      },
      {
        title: 'HTML5 & CSS',
        progress: '30'
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
