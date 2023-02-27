const { verifyTokenAndAuthorization } = require("./verifyWebToken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = require("express").Router();

//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    await bcrypt.hash(req.body.password, salt);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
