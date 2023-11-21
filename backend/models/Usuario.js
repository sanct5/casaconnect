const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = model('Usuario', UsuarioSchema);
