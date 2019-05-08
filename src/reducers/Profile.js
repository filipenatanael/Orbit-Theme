const initialState = {
  name: 'Filipe Natanael'
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
