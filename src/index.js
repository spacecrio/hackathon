const mongoose = require("mongoose");
const app = require("./app");

//TODO refactor
mongoose.connect(
  "mongodb://mongo:27017",
  { useNewUrlParser: true }
);
mongoose.set("debug", true);

app.listen(8080);
