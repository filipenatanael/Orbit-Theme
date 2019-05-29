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
        title: 'Lead Developer',
        time: '2015 - Present',
        company: 'Startup Hubs, San Francisco',
        details: '<p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>'
      },
      {
        title: 'Senior Software Engineer',
        time: '2014 - 2015',
        company: 'Google, London',
        details: '<p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>'
      },
      {
        title: 'UI Developer',
        time: '2012 - 2014',
        company: 'Amazon, London',
        details: '<p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>'
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
