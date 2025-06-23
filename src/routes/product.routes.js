// TP-LCG-VIDAL/src/routes/product.routes.js

const express = require('express');
const { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/product.controller');
const { validateProductSchema } = require('../middlewares/validateSchema');
const { validateId } = require('../middlewares/validateId');
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

// Route to get all products
router.get('/', getAllProducts);

// Route to get a product by ID
router.get('/:id', validateId, getProductById);

// Route to create a new product (admin only)
router.post('/', authMiddleware, validateProductSchema, createProduct);

// Route to update a product by ID (admin only)
router.put('/:id', authMiddleware, validateId, validateProductSchema, updateProduct);

// Route to delete a product by ID (admin only)
router.delete('/:id', authMiddleware, validateId, deleteProduct);

module.exports = router;