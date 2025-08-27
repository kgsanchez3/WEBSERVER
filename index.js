// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// serve static files (optional)
app.use(express.static("public"));

// root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Request Header Parser Microservice is working!" });
});

// example endpoint
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

// FCC Request Header Parser endpoint
app.get("/api/whoami", (req, res) => {
  const ipaddress = req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress,
    language,
    software
  });
});

// listen on the port assigned by Render
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
