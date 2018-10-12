const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");
const { uploadFile } = require("./controllers/photo");
const app = express();

// TODO use router
const { register, login } = require("./controllers/user");

// Use logger
app.use(morgan("dev"));

// Parse json encoded body
app.use(bodyParser.json());
// compress all responses
app.use(compression());
// Cors
app.use(cors());

app.get("/", function(req, res) {
  return res.status(200).json({ msg: "Use API blyat!" });
});

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
// TODO Here just for testing
router.get("/test", function(req, res) {
  return res.status(200).json({ msg: "Works" });
});

router.post("/uploadebug", uploadFile); //auth,

app.use("/api/v1", router);
// WIP


app.get("/uploadebugfrom", function(req, res) {
  res.set("application/html")
    .send(
      `<!DOCTYPE html>
      <html lang=en>
      <meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="ie=edge"http-equiv=X-UA-Compatible><title>Document</title><p>Please select a file and submit the form to upload an asset to HELL
      <form action="/api/v1/uploadebug" enctype=multipart/form-data method=post><label for=file>Upload a file</label><input type=file name=upload> <input type=submit class=button></form>`
    );
});

// app.get("/protected", auth(),);
// Handle error

app.use(errorHandler);
module.exports = app;
