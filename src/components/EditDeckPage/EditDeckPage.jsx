import React from 'react';
import { useSelector } from 'react-redux';

import DeckForm from '../DeckForm/DeckForm';

function EditDeckPage() {

    // const user = useSelector(store => store.user);

    return (
        <div className="container">
            <section className="edit-deck-containter">
                <DeckForm />
            </section>
        </div>
    )

}

export default EditDeckPage;