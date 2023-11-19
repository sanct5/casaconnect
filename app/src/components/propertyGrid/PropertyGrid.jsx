import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import cardExamples from './cardsExamples';
import PropertyCard from '../propertyCard/PropertyCard';

export const PropertyGrid = () => {
    const examples = cardExamples;

    return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {examples.map((example, index) => (
                        <Grid xs={6} sm={6} md={4} lg={3} key={index}>
                            <PropertyCard property={example} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
    )
}