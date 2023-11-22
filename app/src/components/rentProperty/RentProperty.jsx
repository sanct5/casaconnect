import React from 'react'
import { Typography } from '@mui/material'
import { Container } from '@mui/material'
import FormProperty from './formProperty'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';

export const RentProperty = () => {
    return (
        <Container disableGutters maxWidth="xl" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <div>
                <div>
                    <IconButton href='/home'>
                        <KeyboardArrowLeftIcon style={{ color: "black" }} />
                    </IconButton>
                </div>
            </div>
            <div>
                <Container>
                <Typography variant="h1" component="div" fontWeight={700} fontSize={35} style={{ marginBottom: '25px', whiteSpace: 'nowrap' }}>
                    Publicar inmueble
                </Typography>
                < FormProperty />
                </Container>
            </div>
        </Container>
    )
}