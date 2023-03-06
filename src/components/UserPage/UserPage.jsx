import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
//my imports
import { Link } from 'react-router-dom'


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome to the table, {user.username}!</h2>
      <p>Player ID: {user.id}</p>
      <p>Deck and Stats:</p>
      <Link to="/deck"><button className="link">My Deck</button></Link>
      <br />
      <Link to="/play"><button className="link">Play Game</button></Link>
      <br />
      <Link to="/stats"><button className="link">My Stats</button></Link>
      <br />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
