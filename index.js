// index.js
require('dotenv').config();  // Cargar variables de entorno
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { getProducts } = require('./controllers/shopifyController.js');  // Asegúrate de que el path sea correcto

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

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
