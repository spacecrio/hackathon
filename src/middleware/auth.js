const jwtMiddleware = require("express-jwt");
const JWT_SECRET = process.env.JWT_SECRET;

const auth = jwtMiddleware({ secret: JWT_SECRET });

module.exports = auth;
