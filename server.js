// server.js
const path = require('path');
const express = require('express');
const app = express();

app.use('/js', express.static(__dirname + './dist'));
app.use('/css', express.static(__dirname + './dist'));
app.use('/img', express.static(__dirname + './dist/assets/images'));
app.use('/ico', express.static(__dirname + './dist/assets/images'));

// Start the app by listening on the default
// Heroku port
// Run the app by serving the static files
// in the dist directory
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + './dist/index.html'));
});

app.listen(process.env.PORT || 8080);