import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function DeckForm() {

    const [hero, setHero] = useState('');
    const [name, setName] = useState('');
        //"name" is messing me up. Consider changing to "cardName".
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const addToDeck = (event) => {
        event.preventDefault();
        const newDeck = {
            hero,
            name,
            color,
            quantity
        }
        dispatch({
            type: 'POST_DECK',
            payload: {newDeck}
        });
    } //end addToDeck

    return (
        <form className="deck-form">
        {/* <form className="deck-form" onSubmit={addToDeck}></form> */}
            <section className="new-deck-hero">
                <input value={hero} id="hero" placeholder="Hero Name" onChange={(event) => setHero(event.target.value)} />
            </section>
            <section className="new-card-name">
                <input value={name} id="card" placeholder="Card name" onChange={(event) => setName(event.target.value)} />
            </section>
            <section className="new-card-color">
                <input value={color} id="color" placeholder="Color" onChange={(event) => setColor(event.target.value)} />
            </section>
            <section className="new-card-quantity">
                <input value={quantity} id="quantity" placeholder="Quantity" onChange={(event) => setQuantity(event.target.value)} />
            </section>
            <button className="submit-button" type="submit" onClick={() => history.push('/deck')}>Sleeve Deck</button>
            <button className="add-button" onClick={(addToDeck)}>Add</button>
        </form>
    )

}
export default DeckForm;