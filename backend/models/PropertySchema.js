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
    Wifi: {
      type: Boolean,
      default: false,
    },
    Television: {
      type: Boolean,
      default: false,
    },
    Piscina: {
      type: Boolean,
      default: false,
    },
    AguaCaliente: {
      type: Boolean,
      default: false,
    },
    Plancha: {
      type: Boolean,
      default: false,
    },
    CamaraExterior: {
      type: Boolean,
      default: false,
    },
    PetFriendly: {
      type: Boolean,
      default: false,
    },
    ComidaIncluida: {
      type: Boolean,
      default: false,
    },
    Garaje: {
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
},{
  toJSON:{
      virtuals: true
  },
  toObject: {
      virtuals: true
  }
});

PropertySchema.method('toJSON', function(){
    const{ __v, _id, ...object} =this.toObject();
    object.id = _id;
    return object;
})

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
