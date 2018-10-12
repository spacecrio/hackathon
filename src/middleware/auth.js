const JWT_SECRET = process.env.JWT_SECRET;

app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers["authorization"];
  if (!token) return next(); //if no token, continue

  token = token.replace("Bearer ", "");

  jwt.verify(token, JWT_SECRET, function(err, user) {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Please register Log in using a valid email to submit posts"
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});

module.exports = auth;
