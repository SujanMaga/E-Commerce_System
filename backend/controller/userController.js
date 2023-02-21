const User = require("../models/userModel");

// Register User
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  const token = user.getJWTToken();
  res.json({
    success: true,
    token,
  });
};

// Login User
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  //   field check
  const user = await User.findOne({ email: email }).select("+password");
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    res.json({
      message: "Incorrect password",
    });
  } else {
    const token = user.getJWTToken();
    res.json({
      success: true,
      token,
    });
  }
};
