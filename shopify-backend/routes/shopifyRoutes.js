const express = require('express');
const router = express.Router();
const shopifyController = require('../controllers/shopifyController');

// Ruta para obtener productos
router.get('/products', shopifyController.getProducts);

module.exports = router;
