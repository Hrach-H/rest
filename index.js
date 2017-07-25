const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setting up express app
const app = express();

// connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

// initialize routes
app.use('/api', /* makes all the routes be preceded by /api  */ require('./routes/api'));

// Error handling middleware
app.use(function(err, req, res, next) {
    //console.log(err);
    res.status(422).send({error: err._message});
});

//listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('Now listening for requests');
});