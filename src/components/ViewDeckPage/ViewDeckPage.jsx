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
    const card = useSelector(store => store.card);
    const { id } = useParams(); // for delete later


    //useEffect to FETCH_DECK on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_DECK' });
    }, []);
    
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
                                {/* <h3>"{deck.hero}"</h3> */}
                                <p>{deck.name}, {deck.color}, {deck.quantity}</p>
                            </section>
                            {/* <section key={card.id} className="thisDeckCards">
                                <p>{card.name}, {card.color}, {card.quantity}</p>
                            </section> */}
                        </div>
                    )
                })}
                <button onClick={() => history.push('/edit')}>edit</button>
                <button>delete</button>
            </section>
        </div>

    )
}

export default ViewDeckPage;