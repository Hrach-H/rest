const express = require('express');

// setting up express app
const app = express();

//listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('Now listening for requests');
});