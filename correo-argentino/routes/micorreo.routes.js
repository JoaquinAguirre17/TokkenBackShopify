// micorreo.routes.js
const express = require('express');
const router = express.Router();
const {
  registerUser,
  validateUser,
  getAgencies,
  getRates,
  importShipping,
} = require('../controller/micorreo.controller')

// Registro de usuario
router.post('/register', registerUser);

// Validar usuario
router.post('/validate', validateUser);

// Obtener sucursales por provincia
router.get('/agencies', getAgencies);

// Cotizar envío
router.post('/rates', getRates);

// Importar envío
router.post('/shipping/import', importShipping);

module.exports = router;

// micorreo.controller.js
const { authenticatedRequest } = require('./micorreo.service');

// Registrar un nuevo usuario
async function registerUser(req, res) {
  try {
    const response = await authenticatedRequest('/register', 'POST', req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Validar usuario
async function validateUser(req, res) {
  try {
    const response = await authenticatedRequest('/users/validate', 'POST', req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Obtener sucursales por provincia
async function getAgencies(req, res) {
  try {
    const { customerId, provinceCode } = req.query;
    const response = await authenticatedRequest(
      `/agencies?customerId=${customerId}&provinceCode=${provinceCode}`,
      'GET'
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Cotizar envío
async function getRates(req, res) {
  try {
    const response = await authenticatedRequest('/rates', 'POST', req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Importar envío
async function importShipping(req, res) {
  try {
    const response = await authenticatedRequest('/shipping/import', 'POST', req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  registerUser,
  validateUser,
  getAgencies,
  getRates,
  importShipping,
};
