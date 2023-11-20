const express = require('express')
const Property = require('../models/Property');

exports.createProperty = async (req, res = express.request ) => {
  // Lógica para crear una nueva propiedad
    try{
        const { name, nightlyRate, description, environmentDescription, amenities, location, photos } = req.body;
        const newProperty = new Property({
        name,
        nightlyRate,
        description,
        environmentDescription,
        amenities,
        location,
        photos,
        });
        await newProperty.save();
        res.status(201).json({ message: 'Propiedad creada exitosamente' });
    }
        catch(error){
            console.error(error);
            res.status(500).json({ message: 'Error al crear propiedad' });
        }
};
exports.updateProperty = async (req, res) => {
    // Lógica para actualizar una propiedad
    try{
        const { id } = req.params;
        const { name, nightlyRate, description, environmentDescription, amenities, location, photos } = req.body;
        await Property.findByIdAndUpdate(id, {
        name,
        nightlyRate,
        description,
        environmentDescription,
        amenities,
        location,
        photos,
        });
        res.status(200).json({ message: 'Propiedad actualizada exitosamente' });
    }
        catch(error){
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar propiedad' });
        }
}
exports.deleteProperty = async (req, res) => {
    // Lógica para eliminar una propiedad
    try{
        const { id } = req.params;
        await Property.findByIdAndDelete(id);
        res.status(200).json({ message: 'Propiedad eliminada exitosamente' });
    }
        catch(error){
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar propiedad' });
        }
}
exports.getProperty = async (req, res) => {
    // Lógica para obtener una propiedad
    try{
        const { id } = req.params;
        const property = await Property.findById(id);
        res.status(200).json({ property });
    }
        catch(error){
            console.error(error);
            res.status(500).json({ message: 'Error al obtener propiedad' });
        }
}

