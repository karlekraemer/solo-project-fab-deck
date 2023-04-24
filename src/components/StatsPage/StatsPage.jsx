import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import use history, axios
// import { useHistory } from 'react-router-dom';
import './statsPage.css';

function StatsPage() {

    const win = useSelector(store => store.winReducer)
    const loss = useSelector(store => store.lossReducer)

    const dispatch = useDispatch();

    return (
        <div className="stats">
            <h1>Stats Page</h1>
            <button onClick={() => dispatch({ type: 'INCREASE_WIN' })}>Enter Win</button>
            <button onClick={() => dispatch({ type: 'INCREASE_LOSS' })}>Enter Loss</button>
            <section className="statsText">
                <h2>Total Wins: {win}</h2>
                <h2>Total Losses: {loss}</h2>
            </section>
        </div>

    ); //end StatsPage. Wins and losses added by player. 
}

export default StatsPage;
