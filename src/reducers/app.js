const initialState = {
  config: {
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
    alternate: 'select language',
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
