const express = require('express');
const cors = require('cors');
const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:5173',  // Permitir solo desde el frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Ejemplo de endpoint de productos
app.get('/api/shopify/products', (req, res) => {
  res.json(products);  // Respuesta de productos
});

// Iniciar servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
