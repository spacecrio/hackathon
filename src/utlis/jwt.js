const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = "2h";

module.exports = {
  issue: payload => jwt.sign(payload, JWT_SECRET, { expiresIn: EXPIRES_IN })
};
