import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import use history, axios
import { useHistory } from 'react-router-dom';

function StatsPage() {

    return (
        <main>
            <h1>Stats Page</h1>
            <button>Enter Win</button>
            <button>Enter Loss</button>
            <h2>Total Wins: 0</h2>
            <h2>Total Losses: 0</h2>
        </main>

    ); //end deckList function
}

export default StatsPage;