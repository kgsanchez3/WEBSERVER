// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var cors = require('cors');
var app = express();

// enable CORS (so API is remotely testable by FCC)
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// serve static files (optional)
app.use(express.static("public"));

// root endpoint (optional)
app.get('/', function (req, res) {
  res.json({ message: 'Request Header Parser Microservice is working!' });
});

// first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// FreeCodeCamp Request Header Parser Microservice endpoint
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress,
    language,
    software
  });
});

// listen for requests
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
