const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// Get a list of ninjas from the DB
router.get('/ninjas', function(req, res, next) {
    res.send({type: 'GET'});
});

// Add a new ninja to the DB
router.post('/ninjas', function(req, res, next) {
    Ninja.create(req.body).then(function(result) {
        res.send(result);
    }).catch(next);
});

// Update a ninja in the DB
router.put('/ninjas/:id' /* id is a parameter/variable, that's why we need ':' */, function(req, res, next) {
    res.send({type: 'PUT'});
});

// Delete a ninja from the DB
router.delete('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(removedNinja) {
        res.send(removedNinja);
    });
});

module.exports = router;