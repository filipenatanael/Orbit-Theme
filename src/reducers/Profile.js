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
    content: 'Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free resume/CV template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.'
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
