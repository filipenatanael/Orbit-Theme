const initialState = {
  general: {
    photo: '',
    name: 'Filipe Natanael',
    title: 'Full Stack Developer',
    email: 'filipenatanael@example.com',
    phone: '00 00000-00000',
    portifolio: '@filipenatanael',
    linkedin: '@filipenatanael',
    github: '@filipenatanael',
    twitter: '@filipenatanael'
  },
  summary: {
    title: 'CAREER PROFILE',
    content: 'Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free resume/CV template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.'
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
      break;
    default:
      return state;
  }
}
