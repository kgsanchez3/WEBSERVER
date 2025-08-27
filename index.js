// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// enable CORS so your API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// serve static files (optional, for any public files you might have)
app.use(express.static("public"));

// basic root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Request Header Parser Microservice is working!" });
});

// example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

// listen for requests on the port assigned by Render
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

