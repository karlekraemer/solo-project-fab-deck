const cardReducer = (state = [], action) => {
    console.log("in card reducer", action.payload);
    switch (action.type) {
      case 'SET_CARD':
        return action.payload;
      default:
        return state;
    }
  }; //end cardReducer.
  
  // user will be on the redux state at:
  // state.user
  export default cardReducer;