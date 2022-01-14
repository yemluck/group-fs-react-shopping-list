const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET endpoint
router.get('/', (req, res) => {
    // Write SQL query
    const sqlText = `SELECT * FROM groceries ORDER BY purchased, name ASC`;
    pool.query(sqlText)
        // Send data to client after it's retrieved from database
        .then( result => {
            console.log('GET successful: ', result);
            res.send(result.rows);
        })
        // If GET fails, send error
        .catch( err => {
            console.error('GET failed', err);
            res.sendStatus(500);
        })
});

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

});

//PUT endpoint
//update all
router.put('/', (req, res) => {
    let queryText = `
        UPDATE groceries SET purchased = false 
    `;

    pool.query(queryText)
        .then((res) => {
            console.log('Changed purchased to false');
        })
        .catch((error) => {
            console.error('Error updating the DB', error);
            res.sendStatus(500);
        })
});

//update 1
router.put('/:id', (req, res) => {
    
    let queryText = `
        UPDATE groceries SET purchased = true WHERE id = $1
    `;

    let queryParams = [
        req.params.id
    ];

    pool.query(queryText, queryParams)
        .then((res) => {
            console.log('Changed purchased to true');
        })
        .catch((err) => {
            console.log('Error in changing purchased to true', err);
            res.sendStatus(500);
        })
})

//DELETE endpoint
router.delete('/', (req, res) => {
    let queryText = `
        DELETE FROM groceries;
    `;

    pool.query(queryText)
        .then((res) => {
            console.log('DELETE success');
        })
        .catch((err) => {
            console.error('DELETE endpoint failed', err);
            res.sendStatus(500);
        })
});

module.exports = router;