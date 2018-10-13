const userModel = require("../models/user");
const jwt = require("../utlis/jwt");
// TODO DRY

// Must be POST
async function register(req, res) {
  try {
    const { username, password } = req.body;

    const user = await new userModel({ username, password }).save();

    const token = jwt.issue({ username: user.username });
    return res.status(200).json({ token });
  } catch (e) {
    console.error(e);
    return res.status(409).json({ error: "username already taken" });
  }
}

// Must be POST
async function login(req, res) {
  const { username, password } = req.body;
  try {
    // User and password not null
    if (!username || !password) {
      return res.status(401).json({
        error:
          "The entered username and password do not match the ones stored in our database"
      });
    }

    // Username in base
    const user = await userModel.findOne({ username });

    // If user undefind
    if (!user) {
      return res.status(401).json({
        error:
          "The entered username and password do not match the ones stored in our database"
      });
    }
    // Password is valid?
    const validate = await user.isValidPassword(password);

    // If password valid
    if (validate) {
      // Finally username and password valid
      const token = jwt.issue({ username: user.username });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({
        error:
          "The entered username and password do not match the ones stored in our database"
      });
    }
  } catch (e) {
    // TODO delete consloe
    console.error(e);
    return res.status(401).json({
      error:
        "The entered username and password do not match the ones stored in our database"
    });
  }
}

module.exports = { register, login };
