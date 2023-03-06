const deckReducer = (state = [], action) => {
    console.log("in reducer", action.payload);
    switch (action.type) {
      case 'SET_DECK':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default deckReducer;