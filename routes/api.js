const express = require('express');
const router = express.Router();

// Get a list of ninjas from the DB
router.get('/ninjas', function(req, res) {
    res.send({type: 'GET'});
});

// Add a new ninja to the DB
router.post('/ninjas', function(req, res) {
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

// Update a ninja in the DB
router.put('/ninjas/:id' /* id is a parameter/variable, that's why we need ':' */, function(req, res) {
    res.send({type: 'PUT'});
});

// Delete a ninja from the DB
router.delete('/ninjas/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;