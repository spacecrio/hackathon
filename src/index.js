// As early as possible in your application, require and configure dotenv
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const mg = mongoose.connect(
  "dfsadvsavdcas",
  { useNewUrlParser: true },
  function(error) {
    if (error) console.error(error);
    process.exit(1);
  }
);

// If we in dev mode enable mongoose logging
if (process.env.NODE_ENV === "development") mongoose.set("debug", true);

app.listen(process.env.PORT);
