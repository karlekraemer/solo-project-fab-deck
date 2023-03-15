import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* deckSaga() {
    yield takeLatest('FETCH_DECK', fetchDeck);
    yield takeEvery('POST_DECK', postDeck);
    yield takeEvery('DELETE_DECK', deleteDeck);
    // will need a deleteCard
}

// GET deck saga
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


export default deckSaga;