import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* cardSaga(props) {
    yield takeLatest('FETCH_CARD', fetchCard);
    yield takeEvery('POST_CARD', postCard);
    yield takeEvery('FETCH_THIS_CARD', fetchThisCard);
    yield takeEvery('EDIT_CARD', editCard);
    yield takeEvery('DELETE_CARD', deleteCard);

}

// GET card
function* fetchCard() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('/api/card', config);
        console.log('get all card: ', response.data);
        yield put({ type: 'SET_CARD', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

// fetch THIS card saga 
function* fetchThisCard(action) {
    console.log('This card: ', action.payload);
    const id = action.payload;
    try {
      const thisCard = yield axios.get(`/api/card/${id}`);
  
      yield put({ type: 'SET_THIS_CARD', payload: thisCard.data[0]});
    } catch (error) {
      console.log('This Card get request failed: ', error);
    };
  };

// POST card
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

// EDIT card 
function* editCard(action) {
    console.log('card being edited: ', action.payload.name);
    const id = action.payload.id;
    try {
      yield axios.put(`/api/card/${id}`, {
        name: action.payload.name,
        color: action.payload.color,
        quantity: action.payload.quantity,
      });
      yield fetchCard({ type: 'FETCH_CARD', payload: action.payload});
    } catch (error) {
      console.log('Error editing card', error);
    };
  };

// DEL card
function* deleteCard(action) {
  console.log('action.payload inside delete item saga', action.payload);
  const deck = action.payload.deck.id;
  try{
      yield axios.delete(`/api/card/${deck}`);
      yield put({ type: 'FETCH_DECK' })
  } catch(err){
      console.log('error in Saga Delete Card', err);
      alert('issue with SAGA DELETE card')
  }
};

export default cardSaga;