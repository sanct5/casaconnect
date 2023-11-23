import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import propertyExample from '../../assets/propertyExample.png';

export default function PropertyCard({ property }) {
    const { id, name, description, nightlyRate, img } = property;
    const navigate = useNavigate();

    const handleCardClick = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await fetch(`http://localhost:4000/api/property/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token,
                },
            });

            const data = await response.json();

            if (data.ok) {
                navigate(`/property/${id}`);
            } else {
                console.error('Error obteniendo la propiedad:', data.message);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <Card sx={{ maxWidth: 322, boxShadow: 0, backgroundColor: '#f2f2f2' }}>
            <CardActionArea onClick={handleCardClick}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={img ? img : propertyExample}
                    alt="Casa en la llanura"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary" fontWeight="normal">
                        {description}
                    </Typography>
                    <Typography variant="h5" component="div">
                        <span style={{ color: 'black', fontWeight: 'bold' }}>{`$${nightlyRate} COP`}</span>
                        {' '}
                        <span style={{ color: '#747474', fontWeight: 'normal' }}>Noche</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
