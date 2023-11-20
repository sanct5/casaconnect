const express = require('express')
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const registerUser = async (req, res = express.request) => {
  // Lógica para registrar un nuevo usuario
    const { email, username, password } = req.body;
    try{
        let usuario = await Usuario.findOne({ email: email})
        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            })
        }
        usuario = new Usuario( req.body );
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );
        await usuario.save();

        res.status(200).son({
            ok: true,
            usuario
        })
    } catch(error) {
        console.log( error )
        res.status(500).json({
            ok: false,
            error,
        })
    }
};

const loginUser = async (req, res = express.request) => {
  // Lógica para autenticar el inicio de sesión de un usuario
    const { email, username, password } = req.body;
    try{
        let usuario = await Usuario.findOne({ email: email })
        if( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            })
        }
        const passwordValid = bcrypt.compareSync(password, usuario.password);
        if( !passwordValid ){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }
        
        const token = await( generarJWT(usuario.id, usuario.username))

        res.status(200).json({
            ok: true,
            usuario,
            token
        })
    } catch(error) {
        console.log( error )
        res.status(500).json({
            ok: false,
            error,
        })
    }
}

const validatedUser = async (req, res = express.request ) => {
    // Lógica para validar si un usuario está autenticado
    const {uid, username} = req

    const token = await( generarJWT(uid, username) )

    res.json({
        ok: true,
        token
    })
}

module.exports = {registerUser,loginUser,validatedUser};

