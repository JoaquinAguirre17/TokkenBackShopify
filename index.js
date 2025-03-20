require('dotenv').config();  // Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const path = require('path'); // Importamos 'path' para manejar rutas
const { getProducts, getProductDetails } = require('./shopify-backend/controllers/shopifyController');  // Ajusta la ruta si es necesario

const app = express();
const port = process.env.PORT || 5000;

// Configuración de CORS
app.use(cors({
  origin: 'https://tokkencba.com',  // Peeermitir solo desde el frontendaaa
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la API
app.get('/api/shopify/products', getProducts);
app.get('/api/shopify/products/:id', getProductDetails);



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
