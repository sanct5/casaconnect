const { Schema, model } = require('mongoose');

const propertySchema = Schema({
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  },
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});

propertySchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
})

module.exports = model("Property", propertySchema);
