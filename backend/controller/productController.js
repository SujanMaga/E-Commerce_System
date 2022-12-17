const Product = require("../models/productModel");

//create product _admin

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.json({
    success: true,
    product,
  });
};

// get products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  // res.json({ message: "Route is working fine" });
  res.json({
    success: true,
    products,
  });
};
