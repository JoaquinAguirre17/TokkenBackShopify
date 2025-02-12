const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Configuración de CORS
app.use(cors({
  origin: ['http://localhost:5173', 'https://tokkencba.com'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Endpoint para obtener productos de Shopify
app.get('/api/shopify/products', async (req, res) => {
  try {
    // URL del endpoint de Shopify para obtener productos
    const shopifyUrl = `https://gh007n-wr.myshopify.com/admin/api/products.json?`; // Cambia los valores según lo necesario

    // Solicitar los productos desde Shopify
    const response = await axios.get(shopifyUrl, {
      headers: {
        'X-Shopify-Access-Token': 'your-access-token', // Asegúrate de poner el token correcto de Shopify
        'Content-Type': 'application/json',
      }
    });

    // Responder con los productos obtenidos
    res.status(200).json(response.data.products);
  } catch (error) {
    console.error('Error al obtener productos desde Shopify:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los productos' });
  }
});

// Iniciar servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
