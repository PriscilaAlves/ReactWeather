var express = require('express');

// Create our app
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});
