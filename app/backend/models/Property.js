const mongoose = require('mongoose');

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
    type: [String], 
    default: [] 
  }, // Lista de servicios disponibles
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
