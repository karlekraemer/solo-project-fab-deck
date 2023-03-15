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

// thisCard GET route
router.get('/:id', (req,res) => {
  if (req.isAuthenticated()) {
    console.log('get card id:', req.params.id);
    const id = req.params.id;
    const queryText = `
    SELECT * FROM "card"
    WHERE "id" = $1;`;
    pool
      .query(queryText, [id])
      .then(result => {

        res.send(result.rows);
      })
      .catch((error) => {
        console.log('router.post deck error: ', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

//card POST route will go here
router.post('/', (req, res) => {
  const deck_id = req.user.id; // THIS IS WEHRE THE POST ERRRORS ARE OCCURING, THE ID
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

// card EDIT 
router.put('/:id', (req, res) => {
  console.log('req.body of PUT request: ', req.body, req.params.id);
  if (req.isAuthenticated()) {
    const id = req.params.id;
    const queryText = `
    UPDATE "card"
    SET
    "name" = $2,
    "color" = $3,
    "quantity" = $4,
    WHERE "id" = $1;`;
    pool
      .query(queryText, [
        id,
        req.body.name,
        req.body.color,
        req.body.quantity,
      ])
      .then (result => {
        console.log('result from PUT: ', result);
        res.sendStatus(204);
      })
      .catch(error => {
        console.log('error updating in router PUT: ', error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});


module.exports = router;