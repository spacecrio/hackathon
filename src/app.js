const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");
const app = express();

// TODO use router
const { register, login } = require("./controlles/user");

// Use logger
app.use(morgan("dev"));

// Parse json encoded body
app.use(bodyParser.json());
// compress all responses
app.use(compression());
// Cors
app.use(cors());

app.post("/register", register);
app.post("/login", login);

// TODO Here just for testing
app.get("/test", function(req, res) {
  return res.status(200).json({ msg: "Works" });
});
// app.get("/protected", auth(),);
// Handle error
app.use(errorHandler);
module.exports = app;
