const initialState = {
  config: {
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png',
    alternate: 'select language',
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
