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
        let queryText = `SELECT * FROM "deck" JOIN "card" ON "deck"."id" = "card"."deck_id" WHERE "deck_id" = $1;`;
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

// thisDeck GET route
// router.get('/:id', (req,res) => {
//     if (req.isAuthenticated()) {
//       console.log('get deck id:', req.params.id);
//       const id = req.params.id;
//       const queryText = `
//       SELECT * FROM "deck"
//       WHERE "id" = $1;`;
//       pool
//         .query(queryText, [id])
//         .then(result => {
  
//           res.send(result.rows);
//         })
//         .catch((error) => {
//           console.log('router.post deck error: ', error);
//           res.sendStatus(500);
//         });
//     } else {
//       res.sendStatus(403);
//     }
//   });

//deck POST route
router.post('/', (req, res) => {

    const user_id = req.user.id;
    const hero = req.deck.hero;
    
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

// PUT route for editing deck
// router.put('/:id', (req, res) => {
//     console.log('req.body of PUT request: ', req.body, req.params.id);
//     if (req.isAuthenticated()) {
//       const id = req.params.id;
//       const queryText = `
//       UPDATE "deck"
//       SET
//       "name" = $2,
//       "color" = $3,
//       "quantity" = $4,
//       WHERE "id" = $1;`;
//       pool
//         .query(queryText, [
//           id,
//           req.body.name,
//           req.body.color,
//           req.body.quantity,
//         ])
//         .then (result => {
//           console.log('result from PUT: ', result);
//           res.sendStatus(204);
//         })
//         .catch(error => {
//           console.log('error updating in router.PUT: ', error);
//           res.sendStatus(500);
//         })
//     } else {
//       res.sendStatus(403);
//     }
//   });

// DELETE deck route
router.delete('/:id', (req, res) => {
    console.log('req.body', req.user.id);
    if (req.isAuthenticated()){
        let id = req.user.id;
        let queryText = `
        DELETE FROM "deck"
        WHERE id = $1;`;
        pool
          .query(queryText, [id])
          .then((result) => {
            console.log('Delete result: ', result);
            res.sendStatus(202);
          })
          .catch((error) => {
            console.log('router.delete deck error: ', error);
            res.sendStatus(500);
          })
      } else {
        res.sendStatus(403);
      }
    });

module.exports = router;