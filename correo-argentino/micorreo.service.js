const axios = require('axios');
require('dotenv').config();

let token = null;
let tokenExpiration = null; // Variable para almacenar la fecha de expiración del token

// Obtener token de autenticación
async function authenticate() {
  const credentials = Buffer.from(`${process.env.MICORREO_USER}:${process.env.MICORREO_PASSWORD}`).toString('base64');
  try {
    const response = await axios.post(
      `${process.env.MICORREO_BASE_URL}/token`,
      {},
      {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    );
    token = response.data.token;
    tokenExpiration = Date.now() + (response.data.expires_in * 1000); // Suponiendo que expires_in está en segundos
    return token;
  } catch (error) {
    throw new Error('Error al autenticar con MiCorreo: ' + error.message);
  }
}

// Hacer una solicitud autenticada
async function authenticatedRequest(endpoint, method = 'GET', data = {}) {
  // Si el token no existe o ha expirado, obtenemos uno nuevo
  if (!token || Date.now() > tokenExpiration) {
    await authenticate();
  }

  try {
    const response = await axios({
      method,
      url: `${process.env.MICORREO_BASE_URL}${endpoint}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error en la solicitud a MiCorreo: ${error.response?.data?.message || error.message}`);
  }
}

module.exports = { authenticate, authenticatedRequest };
