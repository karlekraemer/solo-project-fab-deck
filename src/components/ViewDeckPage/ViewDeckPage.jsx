import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import use history, axios
import { useParams, useHistory } from 'react-router-dom';
import './ViewDeckPage.css';
import DeckForm from '../DeckForm/DeckForm';

function ViewDeckPage() {

    //use history const
    const history = useHistory();
    //dispatch const
    const dispatch = useDispatch();
    //deck list store const
    const deck = useSelector(store => store.deck);
    const user = useSelector(store => store.user);
    const { id } = useParams(); // for delete later


    //useEffect to FETCH_DECK on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_DECK' });
    }, []);

    //delete goes here

    return (
        <div className="container">
            <h2>{user.username}'s Deck</h2>
            <section className="deck-container">

                {deck.map(deck => {
                    return (
                        <div key={deck.id} className="thisDeck">
                            <section className="thisDeckHero">
                                <h3>"{deck.hero}"</h3>
                            </section>
                            <section className="thisDeckCards">
                                {/* <p>{deck.card.name}, {deck.card.color}, {deck.card.quantity}</p> */}
                            </section>
                                <button onClick={() => history.push('/edit')}>edit</button>
                                <button>delete</button>
                        </div>
                    )
                })}
            </section>
        </div>

    )
}

export default ViewDeckPage;