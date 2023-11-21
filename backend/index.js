const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config')
const cors = require('cors');
const { header } = require('express-validator');

const app = express();

// Base de datos
dbConnection();

const headers = {
    cors: {
        origin: 'http://127.0.0.1:5173',
        methods: ['GET', 'POST'],
    }
}

// CORS
app.use( cors(headers) )

app.listen( express.static('public'))

// Rutas
app.use('/api/user', requiere('./routes/userRoutes'));
app.use('/api/property', require('./routes/propertyRoutes'));


app.listen(PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});
