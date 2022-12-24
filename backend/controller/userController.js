const User = require("../models/userModel");

// Register User
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is sample id",
      url: "profilepicUrl",
    },
  });
  const token = user.getJWTToken();
  res.json({
    success: true,
    token,
  });
};
