const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//deck GET route

router.get('/', (req, res) => {
    // GET route code here
    console.log('in the server GET deck router');
    console.log('user is: ', req.user);
    // const userID = req.user.id;
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
    // const deck_id = 1;
    // const hero = req.body.newDeck.hero;
    const user_id = req.user.id;
    const hero = req.body.newDeck.hero;
    // const name = req.body.newCard.name;
    // const color = req.body.newCard.color;
    // const quantity = req.body.newCard.quantity;
    
    console.log('hero: ', hero);
    console.log('in server POST deck for: ', req.user);
    console.log('is authenticated: ', req.isAuthenticated());
    if (req.isAuthenticated()) {
        let queryText = `
        INSERT INTO "deck" ("user_id", "hero")
        VALUES ($1, $2)
        RETURNING "id";`
        pool.query(queryText, [user_id, hero])
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