// routes/propertyRoutes.js
const express = require('express');
const { body, check } = require('express-validator');
const propertyController = require('../controllers/propertyController');

const router = express.Router();

// Ruta para crear una nueva propiedad
router.post('/create', [
  check('name').isLength({ min: 3 }),
  check('nightlyRate').isNumeric(),
  check('description').isLength({ min: 5 }),
  check('environmentDescription').isLength({ min: 5 }),
  check('amenities').isArray(),
], propertyController.createProperty);

module.exports = router;
