import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useState, useEffect } from 'react';
import PropertyCard from '../propertyCard/PropertyCard';

export const PropertyGrid = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestOptions = {
                    method: 'GET',  // Cambia a 'POST' si es necesario
                    headers: {
                        'Content-Type': 'application/json',
                        'x-token': localStorage.getItem("token"),
                    },
                };

                const response = await fetch('https://banckend-casaconnect-production.up.railway.app/api/property/', requestOptions);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                const propertiesArray = data.properties.map(property => ({
                    id: property.id,
                    name: property.name,
                    description: property.description,
                    nightlyRate: property.nightlyRate
                }));

                setProperties(propertiesArray);
            } catch (error) {
                console.error('Error en la solicitud:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <Grid container spacing={4}>
                    {properties.map((property, index) => (
                        <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                            <PropertyCard property={property} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};