const expressJwt = require("express-jwt");
const JWT_SECRET = process.env.JWT_SECRET;

function auth() {
  return expressJwt({ secret: JWT_SECRET });
}

module.exports = auth;
