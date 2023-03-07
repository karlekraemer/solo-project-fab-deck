import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function DeckForm() {

    const [hero, setHero] = useState('');
    // cards, colors, quantity needed

    const history = useHistory();
    const dispatch = useDispatch();

    const addToDeck = (event) => {
        event.preventDefault();
        const newDeck = {
            hero
            //cards, colors, quantity needed
        }
        dispatch({
            type: 'POST_DECK',
            payload: {newDeck}
        });
        history.push('/deck');
    } //end addToDeck

    return (
        <form className="deck-form" onSubmit={addToDeck}>
            <section className="new-deck-hero">
                <input value={hero} id="hero" placeholder="Hero Name" onChange={(event) => setHero(event.target.value)} />
            </section>
            <button className="submit-button" type="submit">Sleeve Deck</button>
        </form>
    )

}
export default DeckForm;