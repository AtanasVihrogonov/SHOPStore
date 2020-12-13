const Product = require('../models/product');

// Get AddProduct Function
exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

// Render Add Product
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // create new product based on the class
  product.save(); // save product
  res.redirect('/');
};

// Render Add Products
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};
