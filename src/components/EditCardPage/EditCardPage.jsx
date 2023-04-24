import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditCardPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const thisCard = useSelector(store => store.thisCard);
    console.log('this card is: ', thisCard);

    const submitUpdate = (event) => {
        event.preventDefault();
        console.log('submitting the payload: ', thisCard.name, );
   
          dispatch({
            type: "EDIT_CARD",
            payload: thisCard
          });

          history.push('/deck');
    }; //end of submitUpdate. Sends updated card info to server.  

    const changeName = (event) => {
        console.log('updated name: ', event.target.value);
        dispatch({
            type: 'EDIT_NAME_ONCHANGE',
            payload: {property: 'name', value: event.target.value}
        });
    } // end of changeName. Edits card name. 

    const changeColor = (event) => {
        console.log('updated color: ', event.target.value);
        dispatch({
            type: 'EDIT_COLOR_ONCHANGE',
            payload: {property: 'color', value: event.target.value}
        });
    } // end of changeColor. Edits card color. 

    const changeQuantity = (event) => {
        console.log('updated quantity: ', event.target.value);
        dispatch({
            type: 'EDIT_QUANTITY_ONCHANGE',
            payload: {property: 'quantity', value: event.target.value}
        });
    } // end of changeQuantity. Edits card quantity. 

    return (
        <div className="container">
            <section className="edit-card-containter">
            </section>

            <form className="card-form" onSubmit={submitUpdate}>
                <section className="new-card-name">
                    <input defaultValue={thisCard.name} id="card" placeholder="Card name" onChange={(event) => changeName(event)} />
                </section>
                <section className="new-card-color">
                    <input defaultValue={thisCard.color} id="color" placeholder="Color" onChange={(event) => changeColor(event)} />
                </section>
                <section className="new-card-quantity">
                    <input defaultValue={thisCard.quantity} id="quantity" placeholder="Quantity" onChange={(event) => changeQuantity(event)} />
                </section>
                <button className="submit-button" type="submit" >Submit Changes</button>
            </form>
        </div>

    )

}

export default EditCardPage;