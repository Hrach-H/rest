const express = require('express');
const bodyParser = require('body-parser');

// setting up express app
const app = express();

app.use(bodyParser.json());

// initialize routes
app.use('/api', /* makes all the routes be preceded by /api  */ require('./routes/api'));

//listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('Now listening for requests');
});