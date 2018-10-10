const jwt = require("jsonwebtoken");
const JWT_STRING = process.env.JWT;
const EXPIRES_IN = "2h";

module.exports = {
  issue: payload => jwt.sign(payload, JWT_STRING, { expiresIn: EXPIRES_IN }),
  verify: (token, cb) => jwt.verify(token, JWT_STRING, {}, cb)
};
