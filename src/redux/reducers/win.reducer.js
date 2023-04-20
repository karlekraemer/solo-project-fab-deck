// speed reducer first
const winReducer = (state = 0, action) => {
    console.log('win reducer', state, action);
    if (action.type === 'INCREASE_WIN') {
      state++; //why doesn't state++ work? Needed to delete Return!
    }
    if (action.type === 'DECREASE') {
      state--; //why doesn't state-- work? Needed to delete Return!
    }
    return state
  };


  export default winReducer; 
