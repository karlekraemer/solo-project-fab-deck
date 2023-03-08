import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* cardSaga() {
    yield takeLatest('FETCH_CARD', fetchCard);
    yield takeEvery('POST_CARD', postCard);
}

function* fetchCard() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const response = yield axios.get('/api/card', config);
        console.log('get all card: ', response.data);
        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: 'SET_CARD', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* postCard(action) {
    console.log('new card: ', action.payload);
    try {
        yield axios.post('/api/card', action.payload);
        yield fetchCard({ type: 'FETCH_CARD', payload: action.payload});
    }
    catch (error) {
        console.log('err with postCard', error);
    }

}

export default cardSaga;