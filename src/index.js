// As early as possible in your application, require and configure dotenv
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
mongoose.connect(
  process.env.MONOGO_CONNECTION,
  { useNewUrlParser: true }
);

// If we in dev mode enable mongoose logging
if (process.env.NODE_ENV === "development") mongoose.set("debug", true);

app.listen(8080);
