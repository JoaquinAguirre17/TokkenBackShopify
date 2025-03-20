const express = require('express');
const router = express.Router();
const shopifyController = require('../controllers/shopifyController');

// Ruta para obtener productos
router.get('/products', shopifyController.getProducts);

// Ruta para obtener detalles de un producto específico
router.get('/shopify/products/:id', shopifyController.getProductDetails);

module.exports = router;
