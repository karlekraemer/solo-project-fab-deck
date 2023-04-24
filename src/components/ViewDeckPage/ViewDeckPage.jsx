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

    useEffect(() => {
        dispatch({ type: 'FETCH_DECK' });
    }, []); //useEffect to FETCH_DECK on page load


    const createNewDeck = (event) => {
        event.preventDefault();
        const newDeck = {
            hero
        }
        dispatch({
            type: 'POST_DECK',
            payload: { newDeck }
        });
    }; //end createNewDeck.

    const deleteDeck = (deck) => {
        dispatch({
            type: 'DELETE_DECK',
            payload: {
                id: deck.id
            }
        })
    }; //end deleteDeck.

    const handleEditCard = (deck) => {
        console.log('in editCard const on card page');
        dispatch({
            type: 'SET_THIS_CARD',
            payload: deck
        });
        history.push(`/edit`);
    } //end handleEditCard.

    const deleteCard = (deck) => {
        dispatch({
            type: 'DELETE_CARD',
            payload: {deck}
        })
    }; //end deleteCard.

    return (
        <div className="container">
            <div className="deckTitle">
            <h2>{user.username}'s Pile:</h2>
            </div>
            <section className="deck-container">


                {deck.map(deck => {
                    return (
                        <div key={deck.id} className="thisDeck">
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
} //end ViewDeckPage.

export default ViewDeckPage;