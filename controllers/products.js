const Product = require('../models/product');

// Get AddProduct Function
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

// Post AddProduct Function
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // create new product based on the class
  product.save(); // save product
  res.redirect('/');
};

// Get Products Function
exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();  // fetch all products
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
