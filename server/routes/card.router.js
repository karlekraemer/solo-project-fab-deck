const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//card GET route

router.get('/', (req, res) => {
    // GET route code here
    console.log('in the server GET card router');
    console.log('user is: ', req.user);
    let queryText = 'SELECT * FROM "deck" JOIN "card" ON "deck"."id" = "card"."deck_id" WHERE "user_id" = $1;';
    pool.query(queryText, [req.user.id]).then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    }).catch((err) => {
      console.log('err w get request', err);
      res.sendStatus(500);
    });
  });

//card POST route will go here

module.exports = router;