const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// GET endpoint
router.get('/', (req, res) => {
    // Write SQL query
    const sqlText = `SELECT * FROM groceries ORDER BY purchased, name DESC;`;
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

module.exports = router;