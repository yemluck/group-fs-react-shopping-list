const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...









// setup a POST route to add a new grocery to the database
router.post('/', (req, res) => {
    const queryText = `INSERT INTO groceries (name, quantity, unit)
                       VALUES ($1, $2, $3); `
    const queryParams = [
        req.body.name,
        req.body.quantity,
        req.body.unit
    ]

    pool.query(queryText, queryParams)
    .then((result) => {
        console.log('Added grocery to the database', req.body);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error making database query', error);
        res.sendStatus(500);
        
    })

})





module.exports = router;