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
    wifi: {
      type: Boolean,
      default: false,
    },
    television: {
      type: Boolean,
      default: false,
    },
    piscina: {
      type: Boolean,
      default: false,
    },
    aguaCaliente: {
      type: Boolean,
      default: false,
    },
    plancha: {
      type: Boolean,
      default: false,
    },
    camaraExterior: {
      type: Boolean,
      default: false,
    },
    petFriendly: {
      type: Boolean,
      default: false,
    },
    comidaIncluida: {
      type: Boolean,
      default: false,
    },
    garaje: {
      type: Boolean,
      default: false,
    },
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
      required: false
    },
    coordinates: {
      type: [Number],
      required: false,
    },
  },
  photos: { 
    type: [String], 
    default: [],
    required: false 
  },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
