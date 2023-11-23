import * as React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.name === "" || formData.email === "" || formData.password === "") {
      toast.error('Por favor llena todos los campos');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres');
      return;
    }
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      redirect: 'follow', 
      follow: 'manual', 
    };
  
    fetch('https://banckend-casaconnect-production.up.railway.app/api/auth/new', requestOptions)
      .then(response => {
        if (!response.ok) {
          if (response.status === 400) {
            return response.json().then(errorData => {
              throw new Error(errorData.message || 'El correo ya está ocupado por otro usuario o está mal escrito, por favor verifica');
            });
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        toast.success('Usuario creado con éxito, puedes iniciar sesión');
        navigate("/");
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error(error.message || 'La solicitud no fue exitosa, verifica los campos e inténtelo más tarde');
      });
  };
  
  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          style={{ backgroundColor: "#3F618C" }}
        >
          <img
            style={{
              width: "90%",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginTop: "10%",
            }}
            src={Logo}
            alt="Logo de casaconnect"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <div
            style={{
              margin: "center",
              alignItems: "center",
              marginTop: "10%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        color: "#3F618C",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 24,
                      }}
                    >
                      Nombre de Usuario*
                    </Typography>
                  </div>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="usuario"
                    name="name"
                    autoComplete="usuario"
                    autoFocus
                    onChange={handleChange}
                  />
                </div>
                <div></div>
                <div style={{ margin: "5%" }}></div>
                <div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        color: "#3F618C",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 24,
                      }}
                    >
                      Correo*
                    </Typography>
                  </div>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                  />
                </div>
                <div></div>
                <div style={{ margin: "5%" }}></div>

                <div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        color: "#3F618C",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 24,
                      }}
                    >
                      Contraseña*
                    </Typography>
                  </div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                </div>
                <div></div>
                <div style={{ margin: "5%" }}></div>
                <Grid style={{ marginTop: "5%" }}></Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#3F618C",
                    borderRadius: 8,
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: 24,
                  }}
                  onClick={handleSubmit}
                >

                  Registrarse
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href=""
                      variant="body2"
                      sx={{
                        color: "#7A7A7A",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 18,
                        marginRight: "15px",
                      }}
                    >
                      ¿Ya tienes una cuenta?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="../login/"
                      variant="body2"
                      sx={{
                        color: "#406595",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      {"Iniciar sesión"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
