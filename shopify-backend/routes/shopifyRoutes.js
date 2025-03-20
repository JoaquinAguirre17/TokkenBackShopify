const express = require('express');
const router = express.Router();
const shopifyController = require('../controllers/shopifyController');

// Ruta para obtener productos
router.get('/products', shopifyController.getProducts);
router.get('/shopify/products/:id', shopifyController.getProductDetails);

module.exports = router;
