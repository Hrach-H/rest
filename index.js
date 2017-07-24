const express = require('express');

// setting up express app
const app = express();

// initialize routes
app.use('/api', /* makes all the routes be preceded by /api  */ require('./routes/api'));

//listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('Now listening for requests');
});