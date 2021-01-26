const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// @ GET
// @ admin
// @ add-product
router.get('/add-product', isAuth, adminController.getAddProduct);

// @ GET
// @ admin
// @ products
router.get('/products', isAuth, adminController.getProducts);

// @ POST
// @ admin
// @ add-product
router.post(
  '/add-product',
  [
    body('title').isString().isLength({ min: 3 }).trim(),
    body('price').isFloat(),
    body('description').isLength({ min: 5, max: 200 }).trim(),
  ],
  isAuth,
  adminController.postAddProduct
);

// @ GET
// @ admin
// @ edit-product/:product:Id
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

// @ POST
// @ admin
// @ edit-product
router.post(
  '/edit-product',
  [
    body('title').isAlphanumeric().isLength({ min: 3 }).trim(),
    body('price').isFloat(),
    body('description').isLength({ min: 5, max: 200 }).trim(),
  ],
  isAuth,
  adminController.postEditProduct
);

// @ POST
// @ admin
// @ delete-product
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
