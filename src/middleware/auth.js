const expressJwt = require("express-jwt");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = expressJwt({ secret: JWT_SECRET });
