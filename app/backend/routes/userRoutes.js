const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { registerUser, loginUser, validatedUser} = require('../controllers/userController');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-token')

router.post('/', loginUser)

router.post('/new', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('username', 'El username es obligatorio').not().isEmpty(),
        check('password', 'La clave debe tener al menos 6 digitos' ).isLength({ min: 6}),
        validarCampos
    ],        
    registerUser )

router.get('/renew', validarJWT, validatedUser)

module.exports = router;
