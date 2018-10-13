const mongoose = require("mongoose");

const photoModel = new mongoose.Schema(
  {
    url: {
      type: String,
      unique: true,
      required: true
    },
    location: {
      latitude: { type: Number },
      longitude: { type: Number }
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoModel);
