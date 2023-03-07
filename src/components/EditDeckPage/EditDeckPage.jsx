import React from 'react';
import { useSelector } from 'react-redux';

import DeckForm from '../DeckForm/DeckForm';

function EditDeckPage() {



    return (
        <section className="add-to-deck-containter">
        <DeckForm />
    </section>
    )

}

export default EditDeckPage;