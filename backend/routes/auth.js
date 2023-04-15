const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
  let data = req.body;
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
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

  console.log(data);
});

//Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Wrong Username");
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "2d" }
      );
      const { password, ...others } = user._doc;
      // ...spread operator
      res.status(200).json({ ...others, accessToken });
    } else {
      res.status(401).json("Wrong password");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
