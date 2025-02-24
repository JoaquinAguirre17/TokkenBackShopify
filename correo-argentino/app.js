const express = require('express');
const app = express();
const micorreoRoutes = require('./routes/micorreo.routes'); // Ajustá la ruta según tu estructura
require('dotenv').config();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de MiCorreo
app.use('/api/micorreo', micorreoRoutes);

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

