require('dotenv').config();  // Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const path = require('path'); // Importamos 'path' para manejar rutas
const { getProducts, getProductDetails } = require('./shopify-backend/controllers/shopifyController');  // Ajusta la ruta si es necesario

const app = express();
const port = process.env.PORT || 5000;

// Configuración de CORS
app.use(cors({
  origin: 'https://tokkencba.com',  // Permitir solo desde el frontendaaa
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la API
app.get('/api/shopify/products', getProducts);
app.get('/api/shopify/products/:id', getProductDetails);

// **CONFIGURACIÓN PARA PRODUCCIÓN**: Servir el frontend en producción
if (process.env.NODE_ENV === 'production') {
  // Servir archivos estáticos del frontend (React)
  app.use(express.static(path.join(__dirname, 'build')));

  // Cualquier ruta que no sea API debe redirigir a 'index.html' de React
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
