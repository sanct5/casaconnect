// routes/propertyRoutes.js
const express = require('express');
const { body } = require('express-validator');
const propertyController = require('../controllers/propertyController');

const router = express.Router();

// Ruta para crear una nueva propiedad
router.post('/create', [
  body('name').isLength({ min: 3 }),
  body('nightlyRate').isNumeric(),
  body('description').isLength({ min: 5 }),
  body('environmentDescription').isLength({ min: 5 }),
  body('amenities').isArray(),
  body('location').isObject(),
], propertyController.createProperty);

module.exports = router;
