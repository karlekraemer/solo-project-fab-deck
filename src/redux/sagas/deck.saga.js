import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* deckSaga(props) {
    yield takeLatest('FETCH_DECK', fetchDeck);
    yield takeEvery('POST_DECK', postDeck);
    yield takeEvery('DELETE_DECK', deleteDeck);
    // yield takeEvery('FETCH_THIS_DECK', fetchThisDeck);
    // yield takeEvery('EDIT_DECK', editDeck);
    // will need a deleteCard
}

// worker Sage fire with FETCH_DECK action
function* fetchDeck() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const deck = yield axios.get('/api/deck', config);
        console.log('get all deck: ', deck.data);
        yield put({ type: 'SET_DECK', payload: deck.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

// fetch THIS deck saga to copy paste into card saga
// function* fetchThisCard(action) {
//     console.log('This card: ', action.payload);
//     const id = action.payload;
//     try {
//       const thisDeck = yield axios.get(`/api/card/${id}`);
  
//       yield put({ type: 'SET_THIS_CARD', payload: thisCard.data[0]});
//     } catch (error) {
//       console.log('This Card get request failed: ', error);
//     };
//   };

// POST deck saga
function* postDeck(action) {
    console.log('new deck: ', action.payload);
    try {
        yield axios.post('/api/deck', action.payload);
        yield fetchDeck({ type: 'FETCH_DECK', payload: action.payload});
    }
    catch (error) {
        console.log('err with postDeck', error);
    }

}


// DELETE deck saga
function* deleteDeck(action) {
    console.log('deck being deleted: ', action.payload);
    const id = action.payload.id;
    try {
        const config = {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        };
        yield axios.delete(`/api/deck/${id}`, config);
            //removed ${id}
    
        yield put({ type: 'FETCH_DECK'});
      } catch (error) {
        console.log('Error deleting deck', error);
      };
}; 

// EDIT deck 
// function* editCard(action) {
//     console.log('card being edited: ', action.payload.id);
//     const id = action.payload.id;
//     try {
//       yield axios.put(`/api/card/${id}`, {
//         name: action.payload.name,
//         color: action.payload.color,
//         quantity: action.payload.quantity,
//       });
//       yield fetchCard({ type: 'FETCH_CARD', payload: action.payload});
//     } catch (error) {
//       console.log('Error editing card', error);
//     };
//   };

export default deckSaga;