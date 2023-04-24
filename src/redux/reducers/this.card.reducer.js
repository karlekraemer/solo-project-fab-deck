const thisCardReducer = (state = {}, action) => {
    console.log('thisCardReducer action: ', action);
    if (action.type === 'SET_THIS_CARD') {
        return action.payload;
    } else if (action.type === 'EDIT_NAME_ONCHANGE') {
        console.log('EDIT name', action.payload);
        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
    } else if (action.type === 'EDIT_COLOR_ONCHANGE') {
        console.log('EDIT color', action.payload);
        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
    } else if (action.type === 'EDIT_QUANTITY_ONCHANGE') {
        console.log('EDIT quantity', action.payload);
        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
    }
        return state;
    } //end thisCardReducer.

    export default thisCardReducer;