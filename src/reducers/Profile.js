const initialState = {
  general: {
    photo: '',
    name: 'Filipe Natanael',
    title: 'Full Stack Developer',
    email: 'filipenatanael@example.com'
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
