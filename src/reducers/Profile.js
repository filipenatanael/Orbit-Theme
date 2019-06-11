import { FETCH_PROFILE } from '../actions';

const initialState = {
  general: {
    active: 0,
    photo: '#',
    name: 'Name',
    title: 'Title',
    contact: [
      {
        type: 'email',
        content: 'example@exmple.com',
        url: 'mailto: yourname@email.com',
        alt: 'Main Email',
        target: false
      }
    ]
  },
  summary: {
    title: 'Career Profile',
    content: '...'
  },
  experiences: {
    title: 'Experiences',
    jobs: [
      {
        title: 'Title',
        time: 'Jan 2010 - Jan 2015',
        company: 'Company',
        details: '<p>...</p>'
      }
    ]
  },
  projects: {
    title: 'Projects',
    intro: '...',
    works: [
      {
        title: 'Project 1',
        tagline: '...',
        url: '#'
      }
    ]
  },
  education: {
    title: 'Education',
    content: [
      {
        degree: 'Degree',
        meta: 'University',
        time: '2010 - 2015'
      }
    ]
  },
  languages: {
    title: 'Languages',
    content: [
      {
        language: 'Enghish',
        level: 'Native'
      }
    ]
  },
  interests: {
    title: 'Interests',
    content: [
      {
        interest: 'Technology'
      }
    ]
  },
  skills: {
    title: 'Skills & Proficiency',
    content: [
      {
        title: 'JavaScript',
        progress: '50'
      }
    ]
  }
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
          ...action.payload
        }
    default:
      return state;
  }
}
