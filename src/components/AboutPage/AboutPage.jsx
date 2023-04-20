import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>I'd like to thank my parents and my sisters for always believing in me despite my eternal waywardness.</p>
        <br></br>
        <p>This app was created using javascript, react, redux, sql, and other technologies. </p>
        <br></br>
        <p>Shouts to the entire Lydian cohort and to our instructor Casie for her wisdom which is matched only by her love for chipotle. </p>
      </div>
    </div>
  );
}

export default AboutPage;
