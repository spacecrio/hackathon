function errorHandler(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized" });
  }

  console.error(err);
}

module.exports = errorHandler;
