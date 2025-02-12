const express = require('express');
const cors = require('cors');
const app = express();

// Configurar CORS para permitir orígenes específicos
app.use(cors({
  origin: ['http://localhost:5173', 'https://tokkencba.com'], // Orígenes permitidos
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



// Endpoint para obtener productos
app.get('/api/shopify/products', (req, res) => {
  try {
    res.status(200).json(products);  // Enviando productos con un código de estado 200
  } catch (err) {
    console.error('Error al obtener productos:', err);
    res.status(500).json({ error: 'Hubo un problema al obtener los productos' });
  }
});


// Iniciar servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
