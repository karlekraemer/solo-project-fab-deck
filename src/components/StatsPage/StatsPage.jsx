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

    ); //end deckList function
}

export default StatsPage;

// import React from 'react';
//imports
// import { useSelector, useDispatch } from 'react-redux';

// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

// function SpeedControl() {
  
//   //speed storage 
//   const speed = useSelector(store => store.speed)
//   //dispatch const
//   const dispatch = useDispatch();
  
//     //return the speed 
//     return (
//       <div>
//         {/* <pre>{JSON.stringify(reduxStore)}</pre> */}
//         <h2>Speed Control</h2>

//         {/* increase speed */}
//         <button onClick={() => dispatch({ type: 'INCREASE' })}> Increase Speed </button>
//         {/* decrease speed */}
//         <button onClick={() => dispatch({ type: 'DECREASE' })}> Decrease Speed </button>
//         <p>SPEED: {speed}</p>
  
//       </div>
//     )
  
// }
