const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const app = express();

// Use logger
app.use(morgan("tiny"));
// Parse json encoded body
app.use(bodyParser.json());
// compress all responses
app.use(compression());

module.exports = app;
