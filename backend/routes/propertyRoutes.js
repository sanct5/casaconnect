const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-token');
const { listProperties, createProperty, updateProperty, deleteProperty } = require('../controllers/propertyController');

router.use(validarJWT);

router.get('/', listProperties);
router.post('/', createProperty);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);

module.exports = router;
