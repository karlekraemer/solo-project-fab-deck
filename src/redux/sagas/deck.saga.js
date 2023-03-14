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
        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const response = yield axios.get('/api/deck', config);
        console.log('get all deck: ', response.data);
        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_DECK', payload: response.data });
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