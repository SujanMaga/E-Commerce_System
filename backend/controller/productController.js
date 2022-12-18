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

// Update products (Admin)

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.json({
      success: false,
    });
  }
  product = await Product.findById(req.params.id, req.body);
  res.json({
    sucess: true,
    product,
  });
};

//delete product

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.json({
      success: false,
    });
  }
  await product.remove();
  res.json({
    success: true,
  });
};
