import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import use history, axios
import { useParams, useHistory } from 'react-router-dom';
import './DeckPage.css';

function DeckPage() {
    
    //use history const
    const history = useHistory();
    //dispatch const
    const dispatch = useDispatch();
    //deck list store const
    const deck = useSelector(store => store.deck);
    const user = useSelector(store => store.user);
    const { id } = useParams();


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
                    return(
                        <div key={deck.id} className="thisDeck">
                            <section className="thisDeckHeader">
                                <h3>"{deck.hero}"</h3>
                                <button>edit</button>
                                <button>delete</button>
                            </section>
                        </div>
                    )
                })}



            </section>
        </div>

    )
}

export default DeckPage;