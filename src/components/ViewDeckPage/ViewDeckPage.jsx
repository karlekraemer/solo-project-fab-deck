import React, { useState, useEffect } from 'react';
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
    // const card = useSelector(store => store.card);
    const [hero, setHero] = useState('');

    //useEffect to FETCH_DECK on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_DECK' });
    }, []);

    const createNewDeck = (event) => {
        event.preventDefault();
        const newDeck = {
            hero
        }
        dispatch({
            type: 'POST_DECK',
            payload: {newDeck}
        });
    };

    //delete goes here

    return (
        <div className="container">
            <h2>{user.username}'s Pile:</h2>
            <section className="deck-container">

                {deck.map(deck => {
                    return (
                        <div key={deck.id} className="thisDeck">
                            <section className="thisDeckHero">
                                {/* <h3>"{deck.hero}"</h3> */}
                                    {/* this returns the hero for every card. Need to figure out how to work around that. */}
                                <p>{deck.name}, {deck.color}, {deck.quantity}</p>
                            </section>
                        </div>
                    )
                })}
                <button onClick={() => history.push('/edit')}>edit</button>
                <button>delete</button>
            </section>
            <form className="deck-form">
            <section className="new-hero-name">
                <input value={hero} id="hero" placeholder="Hero name" onChange={(event) => setHero(event.target.value)} />
            </section>
            </form>
                <button onClick={(createNewDeck)}>New Deck</button>
        </div>

    )
}

export default ViewDeckPage;