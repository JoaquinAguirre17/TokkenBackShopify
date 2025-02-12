const express = require('express');
const cors = require('cors');
const app = express();

// Configurar CORS para permitir orígenes específicos
app.use(cors({
  origin: ['http://localhost:5173', 'https://tokkencba.com'], // Orígenes permitidos
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Datos de ejemplo
const products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
];

// Endpoint para obtener productos
app.get('/api/shopify/products', (req, res) => {
  try {
    // Aquí se deberían obtener los productos reales de la base de datos o API
    res.json(products);  // Retorna los productos como respuesta
  } catch (err) {
    console.error('Error al obtener productos:', err);
    res.status(500).json({ error: 'Hubo un problema al obtener los productos' });
  }
});

// Iniciar servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
