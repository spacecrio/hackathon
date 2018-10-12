const jwtMiddleware = require("express-jwt");
const JWT_SECRET = process.env.JWT_SECRET;

const jwt = jwtMiddleware({ secret: JWT_SECRET });

async function auth(req, res, next) {
  try {
    jwt(req, res, next);
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
  next();
}

module.exports = auth;
