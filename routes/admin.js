const path = require('path');

const express = require('express'); // import express

const rootDir = require('../util/path');

const router = express.Router(); // create router object

// Implicitly reach as '/admin/add-product' => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// Implicitly reach as '/admin/add-product' => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router; // export router
