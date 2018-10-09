const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const app = express();

// Use logger
app.use(morgan("tiny"));
// compress all responses
app.use(compression());

module.exports = app;
