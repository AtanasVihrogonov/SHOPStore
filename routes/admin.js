const path = require('path');

const express = require('express'); // import express

const rootDir = require('../util/path');

const router = express.Router(); // create router object

const products = [];

// Implicitly reach as '/admin/add-product' => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// Implicitly reach as '/admin/add-product' => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
