import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import use history, axios
import { useParams, useHistory } from 'react-router-dom';
import './ViewDeckPage.css';
// import icons when ready to style


function ViewDeckPage() {

    //use history const
    const history = useHistory();
    //dispatch const
    const dispatch = useDispatch();
    //store const
    const deck = useSelector(store => store.deck);
    const user = useSelector(store => store.user);
    const card = useSelector(store => store.card);
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
            payload: { newDeck }
        });
    };

    //delete goes here
    const deleteDeck = (deck) => {
        dispatch({
            type: 'DELETE_DECK',
            payload: {
                id: deck.id
            }
        })
    };

    //edit goes here
    // be careful not to put the payload inside of an object per John
    const handleEditCard = (deck) => {
        console.log('in editCard const on card page');
        dispatch({
            type: 'SET_THIS_CARD',
            payload: deck
        });
        history.push(`/edit`);
    }

    //delete goes here
    const deleteCard = (deck) => {
        dispatch({
            type: 'DELETE_CARD',
            payload: {deck}
        })
    };


    // onClick={() => handleEditIdea(idea)}

    return (
        <div className="container">
            <div className="deckTitle">
            <h2>{user.username}'s Pile:</h2>
            {/* <h2>Hero: {deck.hero}</h2> */}
            </div>
            <section className="deck-container">


                {deck.map(deck => {
                    return (
                        <div key={deck.id} className="thisDeck">
                            {/* <section className="thisDeckHero"> */}
                                {/* <h3>"{deck.hero}"</h3> */}
                                {/* this returns the hero for every card. Need to figure out how to work around that. */}
                            {/* </section> */}
                            <section className="thisDeckCards">
                                <p>{deck.name}, {deck.color}, {deck.quantity} 
                                <section className="cardBtns">
                                    <button className="editBtn" onClick={() => handleEditCard(deck)}>Edit</button>
                                    <button className="deleteBtn" onClick={() => deleteCard(deck)}>Delete</button>
                                </section>
                                </p>
                            </section>
                        </div>
                    )
                })}
            </section>
            <br></br>
            <button className="btn btn_stretchedGreen" onClick={() => history.push('/add')}>Add Cards</button>
            {/* {card.map(card => {
                return (
                    <div key={card.id} className="thisCard">
                    </div>
                )
            })} */}

            <br></br>
            <br></br>
            <form className="deck-form">
                <button className="btn btn_stretchedRed" onClick={() => deleteDeck(deck)}>Delete Deck</button>
                <br></br>
                <br></br>
                <section className="new-hero-name">
                    <input value={hero} id="hero" placeholder="Hero name" onChange={(event) => setHero(event.target.value)} />
                <button className="btn btn_sizeSm" onClick={(createNewDeck)}>Submit New Hero</button>
                </section>
            </form>
        </div>

    )
}

export default ViewDeckPage;