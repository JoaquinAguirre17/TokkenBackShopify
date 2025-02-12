const cors = require('cors');
const express = require('express');
const app = express();

// Permitir solicitudes desde localhost durante el desarrollo y desde el dominio de producción
app.use(cors({
  origin: ['http://localhost:5173', 'https://tokkencba.com'], // Permitir ambos orígenes
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Endpoint de ejemplo
app.get('/api/shopify/products', (req, res) => {
  res.json(products);  // Responder con los productos
});

// Iniciar el servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
