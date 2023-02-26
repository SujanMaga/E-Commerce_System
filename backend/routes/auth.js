const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//Register
router.post("/register", async (req, res) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
    });
  }
});

//Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Wrong Username");
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } else {
      res.status(401).json("Wrong password");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
