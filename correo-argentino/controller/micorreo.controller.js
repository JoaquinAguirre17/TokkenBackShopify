const { authenticatedRequest } = require('../micorreo.service');

// Registrar un nuevo usuario
async function registerUser(req, res) {
  try {
    const response = await authenticatedRequest('/register', 'POST', req.body); // Realiza la solicitud a la API de MiCorreo
    res.status(200).json(response); // Devuelve la respuesta al cliente
  } catch (error) {
    res.status(500).json({ message: error.message }); // Maneja cualquier error
  }
}

// Validar usuario
async function validateUser(req, res) {
  try {
    const response = await authenticatedRequest('/users/validate', 'POST', req.body); // Realiza la validación del usuario
    res.status(200).json(response); // Devuelve la respuesta al cliente
  } catch (error) {
    res.status(500).json({ message: error.message }); // Maneja cualquier error
  }
}

// Obtener sucursales por provincia
async function getAgencies(req, res) {
  try {
    const { customerId, provinceCode } = req.query; // Obtiene los parámetros de la query
    const response = await authenticatedRequest(
      `/agencies?customerId=${customerId}&provinceCode=${provinceCode}`,
      'GET'
    );
    res.status(200).json(response); // Devuelve la respuesta al cliente
  } catch (error) {
    res.status(500).json({ message: error.message }); // Maneja cualquier error
  }
}

// Cotizar envío
async function getRates(req, res) {
  try {
    const response = await authenticatedRequest('/rates', 'POST', req.body); // Solicita la cotización
    res.status(200).json(response); // Devuelve la respuesta al cliente
  } catch (error) {
    res.status(500).json({ message: error.message }); // Maneja cualquier error
  }
}

// Importar envío
async function importShipping(req, res) {
  try {
    const response = await authenticatedRequest('/shipping/import', 'POST', req.body); // Realiza la importación del envío
    res.status(200).json(response); // Devuelve la respuesta al cliente
  } catch (error) {
    res.status(500).json({ message: error.message }); // Maneja cualquier error
  }
}

module.exports = {
  registerUser,
  validateUser,
  getAgencies,
  getRates,
  importShipping,
};
