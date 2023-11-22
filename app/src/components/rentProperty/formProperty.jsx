import React, { useState } from 'react';
import {
    Container, TextField, Checkbox, FormControlLabel, Button, FormGroup, Grid, Typography, IconButton,
    Collapse
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhotoIcon from '@mui/icons-material/Photo';

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

export const FormProperty = () => {
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [location, setLocation] = useState({ latitude: '', longitude: '' });
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleAmenityChange = (amenity) => {
        if (!selectedAmenities.includes(amenity)) {
            setSelectedAmenities((prevSelectedAmenities) => [...prevSelectedAmenities, amenity]);
        }
        else {
            setSelectedAmenities((prevSelectedAmenities) => prevSelectedAmenities.filter((selectedAmenity) => selectedAmenity !== amenity));
        }
    };

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleSave = () => {
        console.log('Form data:', {
            selectedAmenities,
            location,
            selectedImage,
        });
    };

    return (
        <Container spacing={2} alignItems="center" style={{ border: '1px solid black', padding: '60px', borderRadius: '10px', marginBottom: '40px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h1" component="div" fontWeight={500} fontSize={23} style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '39%', fontWeight: 'bold' }}>
                            Nombre del inmueble:
                        </Typography>
                        <TextField label="Nombre del inmueble" fullWidth style={{ backgroundColor: '#9BABBF' }} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h1" component="div" fontWeight={500} fontSize={23} style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '39%', fontWeight: 'bold' }}>
                            Valor por noche:
                        </Typography>
                        <TextField label="Valor por noche" fullWidth style={{ backgroundColor: '#9BABBF' }} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h1" component="div" fontWeight={500} fontSize={23} style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '39%', fontWeight: 'bold' }}>Descripción del inmueble: </Typography>
                        <TextField label="Descripción del inmueble" fullWidth style={{ backgroundColor: '#9BABBF' }} />
                    </div>
                </Grid>
                <Grid item style={{ display: 'flex', flexDirection: 'row' }} xs={12}>
                    <div>
                        <Typography variant="h1" component="div" fontWeight={500} fontSize={23} style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '39%', fontWeight: 'bold' }}>Descripción del entorno:</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: '27px' }}>
                        <TextField label="Descripción del entorno" multiline rows={6} fullWidth style={{ backgroundColor: '#9BABBF' }} />
                    </div>
                </Grid>
                <Grid item style={{ display: 'flex', flexDirection: 'row' }} xs={12}>
                    <div>
                        <Typography variant="h1" component="div" fontWeight={500} fontSize={23} style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '39%', fontWeight: 'bold' }}>
                            Servicios disponibles:
                        </Typography>
                    </div>
                    <div style={{ backgroundColor: '#9BABBF', padding: '5px', borderRadius: '5px', alignItems: 'left', width: '100%', marginLeft: '53px' }}>
                        <IconButton onClick={handleMenuToggle} style={{ marginLeft: '95%' }}>
                            <ArrowDropDownIcon style={{ color: 'white' }} />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Collapse in={isMenuOpen}>
                        <div style={{ backgroundColor: '#EBEBEB', padding: '5px', borderRadius: '5px', width: '71%', marginLeft: '29%' }}>
                            <FormGroup>
                                {amenitiesList.map((amenity) => (
                                    <FormControlLabel
                                        key={amenity}
                                        control={<Checkbox checked={selectedAmenities.includes(amenity)} onChange={() => handleAmenityChange(amenity)} />}
                                        label={amenity}
                                    />
                                ))}
                            </FormGroup>
                        </div>
                    </Collapse>

                    <div>
                        <strong>Servicios seleccionados:</strong> {selectedAmenities.join(', ')}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h1" component="div" fontWeight={500} fontSize={23} style={{ marginRight: '45px', whiteSpace: 'nowrap', fontWeight: 'bold' }}>
                            Ubicación del inmueble:
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', flexBasis: '75%' }}>
                            <TextField label="Latitud" fullWidth value={location.latitude} onChange={(e) => setLocation({ ...location, latitude: e.target.value })} style={{ backgroundColor: '#9BABBF', marginRight: '10px' }} />
                            <TextField label="Longitud" fullWidth value={location.longitude} onChange={(e) => setLocation({ ...location, longitude: e.target.value })} style={{ backgroundColor: '#9BABBF' }} />
                        </div>
                    </div>
                </Grid>
                <Grid item style={{ display: 'flex', flexDirection: 'row' }} xs={12}>
                    <div>
                        <Typography variant="h1" component="div" fontWeight={500} fontSize={23} style={{ marginRight: '10px', whiteSpace: 'nowrap', fontWeight: 'bold' }}>
                            Fotos de inmueble:
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="imageInput" />
                        <label htmlFor="imageInput" style={{ backgroundColor: '#9BABBF', padding: '10px', borderRadius: '5px', cursor: 'pointer', width: '860PX', marginLeft: '10%' }}>
                            <PhotoIcon style={{ marginLeft: '300px', fontSize: '200px' }} />
                        </label>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    {selectedImage && (
                        <div style={{ marginLeft: '10px' }}>
                            <strong>Imagen seleccionada:</strong> {selectedImage.name}
                        </div>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSave} style={{ float: 'right' }}>
                        Guardar
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};


export default FormProperty;
