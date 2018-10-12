const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const SALT_ROUNDS = 10;

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      required: true
    }
  },
  { timestamps: true }
);

// Hash password before save
userModel.pre("save", async function(next) {
  const salt = bcrypt.genSaltSync();
  const hash = await bcrypt.hashSync(this.password, salt);

  this.password = hash;
  next();
});

// Returns promise
userModel.methods.isValidPassword = async function(posiblePassword) {
  const compare = await bcrypt.compare(posiblePassword, this.password);
  return compare;
};

module.exports = mongoose.model("User", userModel);
