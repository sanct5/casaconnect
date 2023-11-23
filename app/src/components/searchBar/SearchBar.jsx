import { Box, Button, Container, IconButton, Input } from '@mui/material'
import React from 'react'
import logoWithName from "../../assets/logoWithName.png"
import { BsPersonCircle } from "react-icons/bs";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const SearchBar = () => {
    return (
        <Container disableGutters
            maxWidth
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: 2,
                borderBottom: '1px solid #B1B1B1',
                marginBottom: 5,
            }}
        >
            <img
                src={logoWithName}
                alt="Logo de la página con el nombre"
                style={{
                    maxWidth: '249px',
                    maxHeight: '49px',
                }}
            />

            <Box
                sx={{
                    border: '1px solid #B1B1B1',
                    borderRadius: 30,
                    padding: 1,
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
            >
                <Input
                    placeholder="Lugar"
                />
                <Input
                    placeholder="Día"
                    sx={{
                        borderLeft: '1px solid #8D8D8D',
                        borderRight: '1px solid #8D8D8D',
                    }}
                />
                <Input
                    placeholder="¿Cuántos?"
                />
                <IconButton href='/home' color='primary' size='medium'><SearchOutlinedIcon fontSize="inherit" /></IconButton>
            </Box>
            <Button href='/rent' variant='text'>Renta aquí tu inmueble</Button>
            <Box
                sx={{
                    border: '1px solid #B1B1B1',
                    borderRadius: 50,
                    padding: 1,
                }}
            >
                <IconButton href='/login'><BsPersonCircle fontSize="25px" /></IconButton>
            </Box>
        </Container>
    )
}
