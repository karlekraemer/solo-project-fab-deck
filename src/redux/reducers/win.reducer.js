const winReducer = (state = 0, action) => {
    console.log('win reducer', state, action);
    if (action.type === 'INCREASE_WIN') {
      state++; 
    }
    if (action.type === 'DECREASE') {
      state--; 
    }
    return state
  }; //end winReducer.


  export default winReducer; 
