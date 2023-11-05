import { createTheme } from '@mui/material/';

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#30588c',
        },
        secondary: {
            main: '#3f618c',
            contrastText: '#c1c1c1',
        },
        error: {
            main: '#e43f36',
        },
        success: {
            main: '#46a448',
        },
        info: {
            main: '#5b7ba6',
        },
        text: {
            primary: 'rgba(0,0,0,0.87)',
        },
        background: {
            default: '#f2f2f2',
        },
    },
    typography: {
        fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif',
    },
});