import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import use history, axios
import { useHistory } from 'react-router-dom';

function DeckPage() {
    
    //use history const
    const history = useHistory();
    //dispatch const
    const dispatch = useDispatch();
    //deck list store const
    const deck = useSelector(store => store.deck);

    //useEffect to FETCH_DECK on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_DECK' });
    }, []);

    return (
        <main>
            <h1>Your Deck:</h1>
            <section className="deck">
                {/* {deck.map(deck => {
                    return (
                        <div key={deck.id}>
                            <ul>test {deck.hero}</ul>
                            <li>t {deck.card_name}</li> 
                            <li>e {deck.color}</li>
                            <li>w {deck.amount}</li>
                        </div>
                    );
                })} */}
            </section>
        </main>

    ); //end deckList function
}

export default DeckPage;