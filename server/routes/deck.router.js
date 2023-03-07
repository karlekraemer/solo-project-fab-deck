const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//deck GET route

router.get('/', (req, res) => {
    // GET route code here
    console.log('in the server GET deck router');
    console.log('user is: ', req.user);
    // let queryText = 'SELECT * FROM "deck" WHERE "user_id" = $1;';
    //this is the former query
    if (req.isAuthenticated()) {
        let queryText = `SELECT * FROM "deck" JOIN "card" ON "deck"."id" = "card"."deck_id" WHERE "user_id" = $1;`;
        pool.query(queryText, [req.user.id]).then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
            .catch((err) => {
                console.log('err w get request', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // forbidden status code
    }
});

//deck POST route will go here
router.post('/', (req, res) => {
    const deck_id = 1;
    // const hero = req.body.newDeck.hero;
    const name = req.body.newDeck.name;
    const color = req.body.newDeck.color;
    const quantity = req.body.newDeck.quantity;
    
    console.log('req.body', req.body);
    console.log('in server POST deck for: ', req.user);
    console.log('is authenticated: ', req.isAuthenticated());
    if (req.isAuthenticated()) {
        let queryText = `
        INSERT INTO "card" ("deck_id", "name", "color", "quantity")
        VALUES ($1, $2, $3, $4)
        RETURNING "id";`
        pool.query(queryText, [deck_id, req.body.newDeck.name, req.body.newDeck.color, req.body.newDeck.quantity])
            .then(result => {
                console.log('New deck id: ', result.rows[0].id)
                res.send({ id: result.rows[0].id });
            })
            .catch((err) => {
                console.log('err w post request', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // forbidden status code
    }
});


module.exports = router;