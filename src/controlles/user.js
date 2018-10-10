const userModel = require("../models/user");
const jwt = require("../utlis/jwt");
const ah = require("../middleware/asyncHandler");

const register = ah((req, res) => {
  const data = { username: req.body.username, password: req.body.password };

  return userModel
    .create(data)
    .then(user => {
      const token = jwt.issue({ id: user.id });
      return res.status(200).json({ token, user });
    })
    .catch(() => res.status(409).json({ error: "username already taken" }));
});

module.exports = { register };
