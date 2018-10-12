function errorHandler(err, req, res) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized" });
  }
  // default to 500 server error
  res.status(500).json({ message: err.message });
}

module.exports = errorHandler;
