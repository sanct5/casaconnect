const jwt = require('jsonwebtoken');

const generarJWT = (uid, username) => {
    return new Promise((resolve, reject) => {
        const payload = { uid: uid, username: username };
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('No se pudo generar el token');
            } else {
                resolve(token);
            }
        });
    });
}
module.exports = { generarJWT }