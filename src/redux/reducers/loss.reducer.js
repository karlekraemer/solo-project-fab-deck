const lossReducer = (state = 0, action) => {
    console.log('loss reducer', state, action);
    if (action.type === 'INCREASE_LOSS') {
      state++; //why doesn't state++ work? Needed to delete Return!
    }
    if (action.type === 'DECREASE') {
      state--; //why doesn't state-- work? Needed to delete Return!
    }
    return state
  };

export default lossReducer;