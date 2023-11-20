const mongoose = require('mongoose');

const amenitiesList = [
  'Wi-fi',
  'Televisión',
  'Piscina',
  'Agua caliente',
  'Plancha',
  'Cámara exterior',
  'Pet friendly',
  'Comida incluida',
  'Garaje',
];

const propertySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  nightlyRate: { 
    type: Number, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  environmentDescription: { 
    type: String, 
    required: true 
  },
  amenities: { 
    type: [{ type: String, enum: amenitiesList }], 
    default: [] 
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  photos: { 
    type: [String], 
    default: [] 
  }, // Lista de URLs de fotos
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
