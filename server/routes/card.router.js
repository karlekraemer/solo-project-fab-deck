// Do I need this? SQL query in deck.router presents the correct data

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//card GET route

router.get('/', (req, res) => {
    // GET route code here
    console.log('in the server GET card router');
    console.log('user is: ', req.user);
    let queryText = 'SELECT * FROM "card" WHERE "deck_id" = $1;';
    // playing around with a join
        // let queryText = `SELECT * FROM "card" JOIN "deck" ON "card"."id" = "deck"."user_id" WHERE "deck_id" = $1;`;

    pool.query(queryText, [req.user.id]).then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    }).catch((err) => {
      console.log('err w get request', err);
      res.sendStatus(500);
    });
  });

//card POST route will go here
router.post('/', (req, res) => {
  const deck_id = req.deck.id;
  // console.log('here we gooooo', req.body.newDeck.id);
  // const hero = req.body.newDeck.hero;
  const name = req.body.newCard.name;
  const color = req.body.newCard.color;
  const quantity = req.body.newCard.quantity;
  
  console.log('req.body', req.body);
  console.log('in server POST card for: ', req.user);
  console.log('is authenticated: ', req.isAuthenticated());
  if (req.isAuthenticated()) {
      let queryText = `
      INSERT INTO "card" ("deck_id", "name", "color", "quantity")
      VALUES ($1, $2, $3, $4)
      RETURNING "id";`
      pool.query(queryText, [deck_id, name, color, quantity])
          .then(result => {
              console.log('New card: ', result.rows[0].id)
              res.send({id: result.rows[0].id});
          })
          .catch(err => {
              console.log('err w post request', err);
              res.sendStatus(500);
          });
  } else {
      res.sendStatus(403); // forbidden status code
  }
});

module.exports = router;