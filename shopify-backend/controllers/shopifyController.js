const axios = require('axios');

const getProducts = async (req, res) => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2025-01/products.json?limit=250`,
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al obtener productos:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error al obtener productos', error: error.response ? error.response.data : error.message });
  }
};


// Función para obtener los detalles de un producto específico
const getProductDetails = async (req, res) => {
  const { id } = req.params; // Obtenemos el id del producto desde los parámetros de la URL

  // Verificar que el id no esté vacío
  if (!id) {
    return res.status(400).json({ message: 'ID de producto es requerido' });
  }

  try {
    const response = await axios({
      method: 'get',
      url: `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2025-01/products/${id}.json`,
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      },
    });

    res.status(200).json(response.data); // Devolvemos los detalles del producto
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al obtener los detalles del producto',
      error: error.response ? error.response.data : error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProductDetails,  // Exportamos la nueva función para obtener los detalles
};
