const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//deck GET route

router.get('/', (req, res) => {
    // GET route code here
    console.log('in the server GET deck router');
    console.log('user is: ', req.user);
    let queryText = 'SELECT * FROM "deck" WHERE "user_id" = $1;';
    pool.query(queryText, [req.user.id]).then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    }).catch((err) => {
      console.log('err w get request', err);
      res.sendStatus(500);
    });
  });

//deck POST route will go here

module.exports = router;