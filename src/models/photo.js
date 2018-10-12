const mongoose = require("mongoose");

const photoModel = new mongoose.Schema(
  {
    url: {
      type: String,
      unique: true,
      required: true
    },
    location: { x: { type: Number }, y: { type: Number } },
    sender: {},
    resiver: {}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", photoModel);
