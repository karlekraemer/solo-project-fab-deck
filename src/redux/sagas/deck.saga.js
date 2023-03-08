import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* deckSaga() {
    yield takeLatest('FETCH_DECK', fetchDeck);
    yield takeEvery('POST_DECK', postDeck);
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
        console.log('get all deck: ', response.data);
        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_DECK', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

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

export default deckSaga;