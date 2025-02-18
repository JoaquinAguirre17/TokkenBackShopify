// index.js
require('dotenv').config();  // Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const { getProducts, getProductDetails } = require('./shopify-backend/controllers/shopifyController');  // Asegúrate de que el path sea correcto

const app = express();
const port = process.env.PORT || 5000;

// Configuración de CORS
app.use(cors({
  origin: 'https://tokkencba.com',  // Permitir solo desde el frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Ruta para obtener productos desde Shopify
app.get('/api/shopify/products', getProducts);

// Ruta para obtener detalles de un producto específico
app.get('/api/shopify/products/:id', getProductDetails);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
