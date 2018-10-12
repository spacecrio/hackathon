const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const auth = require("./middleware/auth");
const app = express();

// TODO use router
const { register } = require("./controlles/user");

// Use logger
app.use(morgan("dev"));

// Parse json encoded body
app.use(bodyParser.json());
// compress all responses
app.use(compression());

app.post("/register", register);
app.get("/protected", auth);

module.exports = app;
