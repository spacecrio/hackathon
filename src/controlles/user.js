const userModel = require("../models/user");
const jwt = require("../utlis/jwt");

async function register(req, res) {
  const data = { username: req.body.username, password: req.body.password };

  try {
    const user = await new userModel(data).save();
    const token = jwt.issue({ id: user.id });
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(409).json({ error: "username already taken" });
  }
}

module.exports = { register };
