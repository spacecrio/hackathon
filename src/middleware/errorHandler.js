function errorHandler(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    res.status(401).json({ message: "Invalid Token" });
  }

  // default to 500 server error
  res.status(500).json({ message: err.message });
}

module.exports = errorHandler;
