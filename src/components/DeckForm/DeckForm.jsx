import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function DeckForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState('');

    const addCardToDeck = (event) => {
        event.preventDefault();
        const newCard = {
            name,
            color,
            quantity
        }
        dispatch({
            type: 'POST_CARD',
            payload: {newCard}
        });
    } //end addCardToDeck. Posts new card to server. 

    return (
        <>
        <form className="card-form">
            <section className="new-card-name">
                <input value={name} id="card" placeholder="Card name" onChange={(event) => setName(event.target.value)} />
            </section>
            <section className="new-card-color">
                <input value={color} id="color" placeholder="Color" onChange={(event) => setColor(event.target.value)} />
            </section>
            <section className="new-card-quantity">
                <input value={quantity} id="quantity" placeholder="Quantity" onChange={(event) => setQuantity(event.target.value)} />
            </section>
            <button className="sleeve-deck-button" onClick={() => history.push('/deck')}>Sleeve Deck</button>
            <button className="add-button" type="submit" onClick={(addCardToDeck)}>Add</button>
        </form>
        </>
    )

}
export default DeckForm;