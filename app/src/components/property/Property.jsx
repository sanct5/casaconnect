import { Container, IconButton, Typography, Grid, Button } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import propertyExample from '../../assets/propertyExample.png';
import mapaExample from '../../assets/mapa.png';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import PetsIcon from '@mui/icons-material/Pets';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import IronOutlinedIcon from '@mui/icons-material/IronOutlined';
import CameraOutdoorOutlinedIcon from '@mui/icons-material/CameraOutdoorOutlined';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import PoolIcon from '@mui/icons-material/Pool';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Property = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await fetch(`https://banckend-casaconnect-production.up.railway.app/api/property/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-token': token,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data.ok) {
                    setProperty(data.property);
                } else {
                    console.error('Error obteniendo la propiedad:', data.message);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };

        fetchProperty();
    }, [id]);

    if (!property) {
        return <div>Cargando...</div>;
    }

    const {
        amenities,
        description,
        environmentDescription,
        name,
        nightlyRate,
        img,
        user,
    } = property;

    const amenityIcons = {
        wifi: <WifiIcon />,
        television: <TvIcon />,
        piscina: <PoolIcon />,
        aguacaliente: <WaterDropOutlinedIcon />,
        plancha: <IronOutlinedIcon />,
        camaraexterior: <CameraOutdoorOutlinedIcon />,
        petfriendly: <PetsIcon />,
        comidaincluida: <FastfoodIcon />,
        garaje: <GarageOutlinedIcon />,
    };

    return (
        <Container disableGutters maxWidth="xl" style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <div style={{ alignItems: "flex-start" }}>
                    <IconButton href='/home'>
                        <KeyboardArrowLeftIcon style={{ color: "black" }} />
                    </IconButton>
                </div>
            </div>
            <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography gutterBottom variant="h5" color="black" fontWeight="bold">
                    {name}
                </Typography>
                <Grid container spacing={2}>
                    {[1, 2, 3, 4].map((item) => (
                        <Grid item xs={12} sm={6} md={3} key={item}>
                            <img src={img ? img : propertyExample} alt={`Foto inmueble ${item}`} style={{ width: '100%', height: "auto" }} />
                        </Grid>
                    ))}
                </Grid>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: '1px solid #B1B1B1', padding: "10px" }}>
                    <Typography gutterBottom variant="p" color="black" fontWeight="bold">
                        {description}
                    </Typography>
                    <Typography gutterBottom variant="p" color="black" fontWeight="bold">
                        <span style={{ color: 'black', fontWeight: "bold" }}>{`$${nightlyRate} COP`}</span>
                        {' '}
                        <span style={{ color: '#747474', fontWeight: "normal" }}>Noche</span>
                        <Button variant="contained" color="primary" style={{ marginLeft: "15px" }}>Hacer reserva</Button>
                    </Typography>
                </div>
                <Typography gutterBottom variant="p" color="black" style={{ borderBottom: '1px solid #B1B1B1', padding: 10 }}>
                    {environmentDescription}
                </Typography>
                <div style={{ borderBottom: '1px solid #B1B1B1', padding: "10px" }}>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <div>
                            <Typography gutterBottom variant="p" color="black" fontWeight="bold">
                                Lo que ofrece este lugar
                            </Typography>
                        </div>
                        <div >
                            <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", padding: 10 }}>
                                {amenities.map((amenity) => {
                                    const amenityKey = amenity.toLowerCase().replace(/\s+/g, ''); // Convertir a minúsculas y quitar espacios
                                    return (
                                        <div key={amenityKey} style={{ display: "flex", flexDirection: "row", gap: 10, width: '30%', marginBottom: "1%" }}>
                                            {amenityIcons[amenityKey] || <span>No icon available for {amenity}</span>}
                                            <Typography variant="p" color="black">{amenity}</Typography>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
                <Typography gutterBottom variant="h6" color="black" fontWeight="bold">
                    Ubicación
                </Typography>
                <img src={mapaExample} alt='Mapa' style={{ maxWidth: "1920px", borderBottom: '1px solid #B1B1B1', padding: 10 }} />
                <div style={{ borderBottom: '1px solid #B1B1B1', padding: "10px" }}>
                    <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', flexDirection: "column", gap: 2 }}>
                            <Typography gutterBottom variant="h6" color="black" fontWeight="bold">
                                Datos de contacto
                            </Typography>
                            <Typography gutterBottom variant="p" color="black">
                                Alojado por {user.name}
                            </Typography>
                            <Button variant="contained" color="primary">Hacer reserva</Button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", gap: 2, width: "70%" }}>
                            <Typography gutterBottom variant="h6" color="black" fontWeight="bold">
                                Durante tu estadía
                            </Typography>
                            <Typography gutterBottom variant="p" color="black">
                                Puedes comunicarte en cualquier momento a través de celular.
                                Te ayudaremos a conseguir servicios como: transporte, comida a domicilio,
                                empleada durante el día para realizar limpieza y cocinar;
                                actividades turísticas y náuticas, como: Pesca, Kayaking,
                                Paddle board Wakeboard, Flyboard, Paseo en Lancha / Bote / Pontón
                                ( Picnic opcional ).Estos servicios tienen costo adicional,
                                los contrataremos con proveedores de la región, previa solicitud con anticipación.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}