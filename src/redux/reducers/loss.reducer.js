const lossReducer = (state = 0, action) => {
    console.log('loss reducer', state, action);
    if (action.type === 'INCREASE_LOSS') {
      state++; 
    }
    if (action.type === 'DECREASE') {
      state--; 
    }
    return state
  }; //end lossReducer. 

export default lossReducer;