const deckReducer = (state = [], action) => {
    console.log("in deck reducer", action.payload);
    switch (action.type) {
      case 'SET_DECK':
        return action.payload;
      default:
        return state;
    }
  }; //end deckReducer.
  
  // user will be on the redux state at:
  // state.user
  export default deckReducer;