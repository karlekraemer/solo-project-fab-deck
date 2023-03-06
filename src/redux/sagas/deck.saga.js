import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deckSaga() {
    yield takeLatest('FETCH_DECK', fetchDeck);
}

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
        console.log('get all: ', response.data);
        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_DECK', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

export default deckSaga;