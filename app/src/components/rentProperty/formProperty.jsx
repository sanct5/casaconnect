import React, { useState } from 'react';
import {
    Container, TextField, Checkbox, FormControlLabel, Button, FormGroup, Grid, Typography, IconButton,
    Collapse
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhotoIcon from '@mui/icons-material/Photo';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const amenitiesList = [
    'Wifi',
    'Television',
    'Piscina',
    'Agua caliente',
    'Plancha',
    'Camara exterior',
    'PetFriendly',
    'Comida incluida',
    'Garaje',
];

const FormProperty = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        nightlyRate: '',
        description: '',
        environmentDescription: '',
        amenities: {},
        location: { latitude: '', longitude: '' },
        photos: [],
    });
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (formData.name === "" || formData.nightlyRate === "" || formData.description === "" || formData.environmentDescription === "") {
            toast.error('Nombre, precio, descripción y descripción del entorno son campos obligatorios');
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-token': localStorage.getItem("token") },
            body: JSON.stringify({
                ...formData,
                amenities: selectedAmenities,
                location: {
                    type: 'Point',
                    coordinates: [
                        parseFloat(formData.location.longitude),
                        parseFloat(formData.location.latitude),
                    ],
                },
                photos: selectedImage ? [selectedImage.name] : [],
            }),
        };

        fetch('http://localhost:4000/api/property/', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast.success('Propiedad agregada exitosamente');
                navigate("/home");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <Container
            style={{
                border: '1px solid black',
                padding: '70px',
                borderRadius: '10px',
                marginBottom: '40px'
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Typography variant="h5" style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '45%' }}>
                            Nombre del inmueble:
                        </Typography>
                        <TextField name="name" label="Nombre del inmueble" fullWidth style={{ backgroundColor: '#9BABBF' }} onChange={handleChange} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Typography variant="h5" style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '45%' }}>
                            Valor por noche:
                        </Typography>
                        <TextField name="nightlyRate" label="Valor por noche" fullWidth style={{ backgroundColor: '#9BABBF' }} onChange={handleChange} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Typography variant="h5" style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '45%' }}>
                            Descripción del inmueble:
                        </Typography>
                        <TextField name="description" label="Descripción del inmueble" fullWidth style={{ backgroundColor: '#9BABBF' }} onChange={handleChange} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Typography variant="h5" style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '45%' }}>
                            Descripción del entorno:
                        </Typography>
                        <TextField name="environmentDescription" label="Descripción del entorno" multiline rows={6} fullWidth style={{ backgroundColor: '#9BABBF' }} onChange={handleChange} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Typography variant="h5" style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '45%' }}>
                            Servicios disponibles:
                        </Typography>
                        <div style={{ backgroundColor: '#9BABBF', padding: '5px', borderRadius: '5px', alignItems: 'left', width: '100%' }}>
                            <IconButton onClick={handleMenuToggle} style={{ marginLeft: '95%' }}>
                                <ArrowDropDownIcon style={{ color: 'white' }} />
                            </IconButton>
                        </div>
                    </div>
                    <Collapse in={isMenuOpen}>
                        <div style={{ backgroundColor: '#EBEBEB', padding: '5px', borderRadius: '5px', width: '68%', marginLeft: '32%' }}>
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
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Typography variant="h5" style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '45%' }}>
                            Ubicación del inmueble:
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <TextField label="Latitud" fullWidth value={location.latitude} onChange={(e) => setLocation({ ...location, latitude: e.target.value })} style={{ backgroundColor: '#9BABBF', marginRight: '10px' }} />
                            <TextField label="Longitud" fullWidth value={location.longitude} onChange={(e) => setLocation({ ...location, longitude: e.target.value })} style={{ backgroundColor: '#9BABBF' }} />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Typography variant="h5" style={{ marginRight: '10px', whiteSpace: 'nowrap', flexBasis: '45%' }}>
                            Fotos de inmueble:
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', }}>
                            <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="imageInput" />
                            <label htmlFor="imageInput" style={{ backgroundColor: '#9BABBF', padding: '10px', borderRadius: '5px', cursor: 'pointer', width: '100%', textAlign: 'center' }}>
                                <PhotoIcon style={{ fontSize: '100px' }} />
                            </label>
                        </div>
                        {selectedImage && (
                            <div style={{ marginTop: '10px' }}>
                                <strong>Imagen seleccionada:</strong> {selectedImage.name}
                            </div>
                        )}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', float: 'right' }}>
                        <Button variant="contained" color="primary" onClick={handleSave} style={{ float: 'right' }}>
                            Guardar
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};




export default FormProperty;
